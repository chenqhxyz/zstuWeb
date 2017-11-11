<template>
  <li
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
    class="b-select-dropdown__item"
    v-show="visible"
    :class="{
      'selected': itemSelected,
      'is-disabled': disabled ,
      'hover': parent.hoverIndex === index
    }">
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script>
  import Emitter from 'src/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'BOption',

    componentName: 'BOption',

    props: {
      value: {
        required: true
      },
      label: [String, Number],
      selected: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        index: -1,
        visible: true
      };
    },

    computed: {
      currentLabel() {
        return this.label || ((typeof this.value === 'string' || typeof this.value === 'number') ? this.value : '');
      },

      currentValue() {
        return this.value || this.label || '';
      },

      parent() {
        let result = this.$parent;
        while (result && !result.isSelect) {
            result = result.$parent;
        }
        return result;
      },

      itemSelected() {
          return this.value === this.parent.value;
      }
    },

    watch: {
      currentLabel() {
        this.dispatch('BSelect', 'setSelected');
      },
      value() {
        this.dispatch('BSelect', 'setSelected');
      }
    },

    methods: {
      hoverItem() {
        if (!this.disabled) {
          this.parent.hoverIndex = this.parent.options.indexOf(this);
        }
      },

      selectOptionClick() {
        if (this.disabled !== true) {
          this.dispatch('BSelect', 'handleOptionClick', this);
        }
      },

      resetIndex() {
        this.$nextTick(() => {
          this.index = this.parent.options.indexOf(this);
        });
      }
    },

    created() {
      this.parent.options.push(this);
      this.parent.cachedOptions.push(this);
      this.parent.optionsCount++;
      this.index = this.parent.options.indexOf(this);

      this.$on('resetIndex', this.resetIndex);
    },

    beforeDestroy() {
      this.dispatch('BSelect', 'onOptionDestroy', this);
    }
  };
</script>
