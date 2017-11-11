<template>
    <div :class="[
                    type === 'textarea' ? 'b-textarea' : 'b-input',
                    size ? 'b-input--' + size : '',
                    {
                      'is-disabled': disabled
                    }
                ]"
         :style="{width:widthStyle}">
        <template v-if="type !== 'textarea'">
            <slot name="icon-left">
                <i class="b-input__icon b-input__icon--left"
                   :class="[
        'b-icon-' + iconLeft
      ]"
                   v-if="iconLeft">
                </i>
            </slot>
            <input
                    v-if="type !== 'textarea'"
                    class="b-input__inner"
                    :class="{
                        'b-input__inner--icon':icon,
                        'b-input__inner--icon-left':iconLeft
                    }"
                    :type="type"
                    :name="name"
                    :placeholder="placeholder"
                    :disabled="disabled"
                    :readonly="readonly"
                    :maxlength="maxlength"
                    :min="min"
                    :max="max"
                    :autocomplete="autoComplete"
                    :autofocus="autofocus"
                    :value="currentValue"
                    ref="input"
                    @input="handleInput"
                    @focus="handleFocus"
                    @blur="handleBlur"
            >
            <slot name="icon">
                <i class="b-input__icon"
                   :class="[
            'b-icon-' + icon,
            onIconClick ? 'is-clickable' : ''
          ]"
                   v-if="icon"
                   @click="handleIconClick">
                </i>
            </slot>
            <i class="b-input__icon b-icon-loading" v-if="validating"></i>
        </template>
        <template v-else>
            <div v-if="maxlength" class="b-textarea__number">
            <span class="b-textarea__length" :class="{
                'is-max': currentLength >= maxlength,
                'is-some': currentLength > 0 && currentLength < maxlength
            }">{{currentLength}}</span><span>/{{maxlength}}</span>
            </div>
            <textarea
                    class="b-textarea__inner"
                    :class="{
                        'b-textarea__inner--maxlength': maxlength > 0
                    }"
                    :value="currentValue"
                    ref="textarea"
                    :name="name"
                    :placeholder="placeholder"
                    :disabled="disabled"
                    :style="textareaStyle"
                    :readonly="readonly"
                    :rows="rows"
                    :autofocus="autofocus"
                    @input="handleInput"
                    @focus="handleFocus"
                    @blur="handleBlur"></textarea>
        </template>
    </div>
</template>
<script>
    import emitter from 'src/mixins/emitter';
    import calcTextareaHeight from './calcTextareaHeight';

    export default {
        name: 'BInput',

        componentName: 'BInput',

        mixins: [emitter],

        data() {
            return {
                currentValue: this.value,
                textareaStyle: {}
            };
        },

        props: {
            value: [String, Number],
            placeholder: String,
            size: String,
            readonly: Boolean,
            autofocus: Boolean,
            icon: String,
            iconLeft: String,
            disabled: Boolean,
            type: {
                type: String,
                default: 'text'
            },
            name: String,
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            rows: {
                type: Number,
                default: 2
            },
            autoComplete: {
                type: String,
                default: 'off'
            },
            maxlength: Number,
            min: Number,
            max: Number,
            validateEvent: {
                type: Boolean,
                default: true
            },
            width: [String, Number],
            onIconClick: Function
        },

        computed: {
            validating() {
                return this.$parent.validateState === 'validating';
            },
            currentLength() {
                return typeof this.currentValue !== 'undefined' ? this.currentValue.length : 0;
            },
            widthStyle(){
                return typeof this.width === 'number' ? `${this.width}px` : this.width;
            }
        },

        watch: {
            value(val, oldValue) {
                this.setCurrentValue(val);
            }
        },

        methods: {
            handleBlur(event) {
                this.$emit('blur', event);
                if (this.validateEvent) {
                    this.dispatch('BFormItem', 'b.form.blur', [this.currentValue]);
                }
            },
            inputSelect() {
                this.$refs.input.select();
            },
            resizeTextarea() {
                if (this.$isServer) return;
                var {autosize, type} = this;
                if (!autosize || type !== 'textarea') return;
                const minRows = autosize.minRows;
                const maxRows = autosize.maxRows;

                this.textareaStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
            },
            handleFocus(event) {
                this.$emit('focus', event);
            },
            handleInput(event) {
                if (this.type === 'textarea' && typeof this.maxlength !== 'undefined' && event.target.value.length > this.maxlength) {
                    event.target.value = event.target.value.substr(0, this.maxlength);
                }
                this.setCurrentValue(event.target.value);
            },
            handleIconClick(event) {
                if (this.onIconClick) {
                    this.onIconClick(event);
                }
                this.$emit('click', event);
            },
            setCurrentValue(value) {
                if (value === this.currentValue) return;
                this.$nextTick(_ => {
                    this.resizeTextarea();
                });
                this.currentValue = value;
                this.$emit('input', value);
                this.$emit('change', value);
                if (this.validateEvent) {
                    this.dispatch('BFormItem', 'b.form.change', [value]);
                }
            }
        },

        created() {
            this.$on('inputSelect', this.inputSelect);
        },

        mounted() {
            this.resizeTextarea();
        }
    };
</script>
