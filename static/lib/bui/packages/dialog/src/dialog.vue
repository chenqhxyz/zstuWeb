<template>
    <transition :name="dialogName">
        <div class="b-dialog__wrapper" v-show="visible" @click.self="handleWrapperClick">
            <div
                    class="b-dialog"
                    :class="[sizeClass, customClass, typeClass]"
                    ref="dialog">
                <div class="b-dialog__header">
                    <slot name="title">
                        <span class="b-dialog__title">{{title}}</span>
                    </slot>
                    <div class="b-dialog__headerbtn">
                        <i v-if="showClose" class="b-dialog__close b-icon b-icon-close" @click='close()'></i>
                    </div>
                </div>
                <div class="b-dialog__body" v-if="rendered">
                    <slot></slot>
                </div>
                <div class="b-dialog__footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Popup from '../../../src/utils/popup';

    export default {
        name: 'BDialog',

        mixins: [Popup],

        props: {
            title: {
                type: String,
                default: ''
            },

            modal: {
                type: Boolean,
                default: true
            },

            modalAppendToBody: {
                type: Boolean,
                default: true
            },

            lockScroll: {
                type: Boolean,
                default: true
            },

            closeOnClickModal: {
                type: Boolean,
                default: true
            },

            closeOnPressEscape: {
                type: Boolean,
                default: true
            },

            showClose: {
                type: Boolean,
                default: false
            },

            size: {
                type: String,
                default: 'small'
            },

            customClass: {
                type: String,
                default: ''
            },

            type: {
                type: String,
                default: 'fade'
            }
        },
        data() {
            return {
                visible: false
            };
        },

        watch: {
            value(val) {
                this.visible = val;
            },
            visible(val) {
                this.$emit('input', val);
                if (val) {
                    this.$emit('open');
                    this.$nextTick(() => {
                        this.$refs.dialog.scrollTop = 0;
                    });
                } else {
                    this.$emit('close');
                }
            }
        },

        computed: {
            sizeClass() {
                return `b-dialog--${ this.size }`;
            },
            typeClass() {
                return `b-dialog--${ this.type }`;
            },
            dialogName() {
                return `dialog-${ this.type }`;              
            }
        },

        methods: {
            handleWrapperClick() {
                if (this.closeOnClickModal) {
                    this.close();
                }
            }
        },

        mounted() {
            if (this.value) {
                this.rendered = true;
                this.open();
            }
        }
    };
</script>
