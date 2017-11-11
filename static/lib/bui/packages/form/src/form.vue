<template>
    <form class="b-form" :class="[
    { 'b-form--inline': inline }
  ]">
        <slot></slot>
    </form>
</template>
<script>

    const queryChildComponent = (children, componentName) => {
        let componentAry = [];

        Array.isArray(children) &&　children.forEach(vm => {
            if (vm.prop && vm.$options.componentName === componentName) {
                componentAry.push(vm);
            } else if (vm.$children.length > 0) {
                componentAry = componentAry.concat(queryChildComponent(vm.$children, componentName));
            }
        });

        return componentAry;
    };

    export default {
        name: 'BForm',

        componentName: 'BForm',

        props: {
            model: Object,
            rules: Object,
            labelWidth: String,
            labelSuffix: {
                type: String,
                default: '：'
            },
            inline: Boolean,
            showMessage: {
                type: Boolean,
                default: true
            }
        },
        watch: {
            rules() {
                this.validate();
            }
        },
        data() {
            return {};
        },
        methods: {
            getFields() {
              return queryChildComponent(this.$children, 'BFormItem');
            },
            resetFields() {
                this.getFields().forEach(field => {
                    field.resetField();
                });
            },
            validate(callback) {
                let valid = true;
                let count = 0;
                let fields = this.getFields();
                fields.forEach((field, index) => {
                    field.validate('', errors => {
                        if (errors) {
                            valid = false;
                        }
                        if (typeof callback === 'function' && ++count === fields.length) {
                            callback(valid);
                        }
                    });
                });
            },
            validateField(prop, cb) {
                let field = this.getFields().filter(field => field.prop === prop)[0];
                if (!field) {
                    throw new Error('must call validateField with valid prop string!');
                }

                field.validate('', cb);
            }
        }
    };
</script>
