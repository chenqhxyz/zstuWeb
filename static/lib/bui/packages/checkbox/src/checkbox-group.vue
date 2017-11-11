<template>
  <div class="b-checkbox-group"
   :class="{
      'b-checkbox-group--vertical': mode === 'vertical'
    }"
    >
    <slot></slot>
  </div>
</template>
<script type="text/babel">
    import Emitter from 'src/mixins/emitter';

    export default {
        name: 'BCheckboxGroup',

        componentName: 'BCheckboxGroup',

        mixins: [Emitter],

        props: {
            value: {},
            mode: {
                type: String,
                default: 'horizontal'
            },
            disabled:Boolean
        },

        watch: {
            value(value) {
                this.dispatch('BFormItem', 'b.form.change', [value]);
            }
        }
    };
</script>
