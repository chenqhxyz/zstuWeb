<template>
    <label
            class="b-radio-button"
            :class="[
      size ? 'b-radio-button--' + size : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled }
    ]"
        @click="onClick"
    >
        <input
                class="b-radio-button__orig-radio"
                :value="label"
                type="radio"
                v-model="value"
                :name="name"
                :disabled="isDisabled"
                ref="input"
            >
        <span class="b-radio-button__inner">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
    </label>
</template>
<script>
    export default {
        name: 'BRadioButton',

        props: {
            label: {},
            disabled: Boolean,
            name: String,
        },
        computed: {
            value: {
                get() {
                    return this._radioGroup.value;
                },
                set(value) {
                    this._radioGroup.$emit('input', value);
                }
            },
            _radioGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'BRadioGroup') {
                        parent = parent.$parent;
                    } else {
                        return parent;
                    }
                }
                return false;
            },
            size() {
                return this._radioGroup.size;
            },
            isDisabled() {
                return this.disabled || this._radioGroup.disabled;
            },
            isClearabled() {
                return this._radioGroup.clearable;
            }
        },
        methods: {
            onClick($e){
                if(this.isClearabled && $e.target !== this.$refs.input && this.label === this.value){
                    this.value = '';
                    $e.preventDefault();
                }
            }
        }
    };
</script>
