<template>
  <div class="b-autocomplete" v-clickoutside="handleClickoutside">
    <b-input
      ref="input"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      :name="name"
      :size="size"
      :width="width"
      :icon="icon"
      :icon-left="iconLeft"
      :autofocus="autofocus"
      :on-icon-click="onIconClick"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown.up.native="highlight(highlightedIndex - 1)"
      @keydown.down.native="highlight(highlightedIndex + 1)"
      @keydown.enter.stop.native="handleKeyEnter"
    >
    </b-input>
    <b-autocomplete-suggestions
      :class="[popperClass ? popperClass : '']"
      ref="suggestions"
      :suggestions="suggestions"
    >
    </b-autocomplete-suggestions>
  </div>
</template>
<script>
  import BInput from 'packages/input';
  import Clickoutside from 'src/utils/clickoutside';
  import BAutocompleteSuggestions from './autocomplete-suggestions.vue';
  import Emitter from 'src/mixins/emitter';

  export default {
    name: 'BAutocomplete',

    mixins: [Emitter],

    componentName: 'BAutocomplete',

    components: {
      BInput,
      BAutocompleteSuggestions
    },

    directives: { Clickoutside },

    props: {
      popperClass: String,
      placeholder: String,
      disabled: Boolean,
      name: String,
      size: String,
      width: [String,Number],
      value: String,
      autofocus: Boolean,
      fetchSuggestions: Function,
      triggerOnFocus: {
        type: Boolean,
        default: true
      },
      icon: String,
      iconLeft: String,
      onIconClick: Function,
      mustSelect: Boolean
    },
    data() {
      return {
        isFocus: false,
        suggestions: [],
        loading: false,
        highlightedIndex: -1,
        showSuggestion: true,
        cacheString:''
      };
    },
    computed: {
      suggestionVisible() {
        const suggestions = this.suggestions;
        let isValidData = Array.isArray(suggestions) && suggestions.length > 0;
        return (isValidData || this.loading) && this.isFocus && this.showSuggestion;
      }
    },
    watch: {
      suggestionVisible(val) {
        this.broadcast('BAutocompleteSuggestions', 'visible', [val, this.$refs.input.$refs.input.offsetWidth]);
      }
    },
    methods: {
      getData(queryString) {
        this.showSuggestion = true;
        this.loading = true;
        if(queryString !== this.cacheString){
            this.suggestions = [];
        }
        this.fetchSuggestions(queryString, (suggestions) => {
          this.loading = false;
          if (Array.isArray(suggestions)) {
            this.suggestions = suggestions;
            this.cacheString = queryString;
          } else {
            console.error('autocomplete suggestions must be an array');
          }
        });
      },
      handleChange(value) {
        this.$emit('input', value);
        this.getData(value);
      },
      handleFocus() {
        this.isFocus = true;
        if (this.triggerOnFocus) {
          this.getData(this.value);
        }
      },
      handleBlur() {
          let selectValue,
              oldValue;
        // 因为 blur 事件处理优先于 select 事件执行
        setTimeout(_ => {
            this.isFocus = false;
            if(this.value === oldValue && this.value !== selectValue){
                this.$emit('input', selectValue);
            }
        }, 100);
        if(this.mustSelect && this.value !== ''){
            selectValue = this.suggestions.length > 0? this.suggestions[0].value : '';
            oldValue = this.value;
        }
      },
      handleKeyEnter() {
        let item;
        if (this.suggestionVisible && (item = this.suggestions[this.highlightedIndex])) {
          this.select(item);
        }
      },
      handleClickoutside() {
        this.isFocus = false;
      },
      select(item) {
        this.$emit('input', item.value);
        this.$emit('select', item);
        this.$nextTick(_ => {
            this.showSuggestion = false;
            this.cacheString = item.value;
            this.suggestions = [item];
        });
      },
      highlight(index) {
        if (!this.suggestionVisible || this.loading) { return; }
        if (index < 0) {
          index = 0;
        } else if (index >= this.suggestions.length) {
          index = this.suggestions.length - 1;
        }
        var elSuggestions = this.$refs.suggestions.$el;

        var elSelect = elSuggestions.children[index];
        var scrollTop = elSuggestions.scrollTop;
        var offsetTop = elSelect.offsetTop;

        if (offsetTop + elSelect.scrollHeight > (scrollTop + elSuggestions.clientHeight)) {
          elSuggestions.scrollTop += elSelect.scrollHeight;
        }
        if (offsetTop < scrollTop) {
          elSuggestions.scrollTop -= elSelect.scrollHeight;
        }

        this.highlightedIndex = index;
      }
    },
    mounted() {
      this.$on('item-click', item => {
        this.select(item);
      });
    },
    beforeDestroy() {
      this.$refs.suggestions.$destroy();
    }
  };
</script>
