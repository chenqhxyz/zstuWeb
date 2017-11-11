<template>
    <label class="b-radio" @click="onClick">
    <span class="b-radio__input"
          :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label,
        'is-focus': focus
      }"
    >
        <span class="b-radio__inner"></span>
      <input
              class="b-radio__original"
              :value="label"
              type="radio"
              v-model="model"
              @focus="focus = true"
              @blur="focus = false"
              :name="name"
              :disabled="isDisabled"
              ref="input"
      >
    </span>
        <span class="b-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
    </label>
</template>
<script type="text/babel">
    import Emitter from 'src/mixins/emitter';

    export default {
        name: 'BRadio',

        mixins: [Emitter],

        componentName: 'BRadio',

        props: {
            value: {},
            label: {},
            disabled: Boolean,
            name: String,
            clearable: Boolean,
        },

        data() {
            return {
                focus: false
            };
        },

        computed: {
            isGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'BRadioGroup') {
                        parent = parent.$parent;
                    } else {
                        this._radioGroup = parent;
                        return true;
                    }
                }
                return false;
            },

            model: {
                get() {
                    return this.isGroup ? this._radioGroup.value : this.value;
                },

                set(val) {
                    if (this.isGroup) {
                        this.dispatch('BRadioGroup', 'input', [val]);
                    } else {
                        this.$emit('input', val);
                    }
                }
            },

            isDisabled() {
                return this.isGroup
                        ? this._radioGroup.disabled || this.disabled
                        : this.disabled;
            },

            isClearabled() {
                return this.isGroup
                        ? this._radioGroup.clearable
                        : this.clearable;
            }
        },

        methods: {
            onClick($e){
                if(this.isClearabled && $e.target !== this.$refs.input && this.label === this.model){
                    this.model = '';
                    $e.preventDefault();
                }
            }
        }
    };
</script>
