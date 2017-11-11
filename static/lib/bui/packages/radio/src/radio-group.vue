<template>
    <div class="b-radio-group"
         :class="{
      'b-radio-group--vertical': mode === 'vertical',
      'b-radio-group--light': light,
    }"
    >
        <slot></slot>
    </div>
</template>
<script type="text/babel">
    import Emitter from 'src/mixins/emitter';

    export default {
        name: 'BRadioGroup',

        componentName: 'BRadioGroup',

        mixins: [Emitter],

        props: {
            value: [String, Number],
            mode: {
                type: String,
                default: 'horizontal'
            },
            disabled: Boolean,
            size: String,
            type: String,
            light: Boolean,
            clearable:Boolean
        },
        watch: {
            value(value) {
                this.$emit('change', value);
                this.dispatch('BFormItem', 'b.form.change', [this.value]);
            }
        }
    };
</script>

