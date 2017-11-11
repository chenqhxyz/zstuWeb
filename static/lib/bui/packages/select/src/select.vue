<template>
    <div
            class="b-select"
            v-clickoutside="handleClose">
        <b-input
                ref="reference"
                v-model="selectedLabel"
                type="text"
                :placeholder="placeholder"
                :name="name"
                :disabled="disabled"
                :readonly="true"
                :validate-event="false"
                :size="size"
                :width="width"
                @focus="handleFocus"
                @click="handleIconClick"
                @mousedown.native="handleMouseDown"
                @keydown.native.down.prevent="navigateOptions('next')"
                @keydown.native.up.prevent="navigateOptions('prev')"
                @keydown.native.enter.prevent="selectOption"
                @keydown.native.esc.prevent="visible = false"
                @keydown.native.tab="visible = false"
                @mouseenter.native="inputHovering = true"
                @mouseleave.native="inputHovering = false"
                :icon="iconClass">
        </b-input>
        <transition name="b-zoom-in-top" @after-leave="doDestroy">
            <b-select-menu
                    ref="popper"
                    v-show="visible">
                <b-scrollbar
                        tag="ul"
                        wrap-class="b-select-dropdown__wrap"
                        view-class="b-select-dropdown__list"
                        v-show="options.length > 0">
                    <slot></slot>
                </b-scrollbar>
            </b-select-menu>
        </transition>
    </div>
</template>

<script>
    import Emitter from 'src/mixins/emitter';
    import BInput from 'packages/input';
    import BSelectMenu from './select-dropdown.vue';
    import BOption from './option.vue';
    import BScrollbar from 'packages/scrollbar';
    import Clickoutside from 'src/utils/clickoutside';
    import {addClass, removeClass, hasClass} from 'src/utils/dom';
    import merge from 'src/utils/merge';

    export default {
        mixins: [Emitter],

        name: 'BSelect',

        componentName: 'BSelect',

        computed: {
            iconClass() {
                let criteria = this.clearable &&
                        !this.disabled &&
                        this.inputHovering &&
                        this.value !== undefined &&
                        this.value !== '';
                return criteria ? 'circle-close is-show-close' : 'arrow-up';
            }
        },

        components: {
            BInput,
            BSelectMenu,
            BOption,
            BScrollbar
        },

        directives: {Clickoutside},

        props: {
            name: String,
            value: {},
            disabled: Boolean,
            clearable: Boolean,
            popperClass: String,
            placeholder: {
                type: String,
                default() {
                    return '请选择';
                }
            },
            size: String,
            width: [String, Number]
        },

        data() {
            return {
                isSelect: true,
                options: [],
                cachedOptions: [],
                selected: {},
                optionsCount: 0,
                dropdownUl: null,
                visible: false,
                selectedLabel: '',
                hoverIndex: -1,
                bottomOverflowBeforeHidden: 0,
                topOverflowBeforeHidden: 0,
                optionsAllDisabled: false,
                inputHovering: false,
                inputWidth: ''
            };
        },

        watch: {
            value(val) {
                this.setSelected();
                this.$emit('change', val);
                this.dispatch('BFormItem', 'b.form.change', val);
            },

            visible(val) {
                if (!val) {
                    this.$refs.reference.$el.querySelector('input').blur();
                    this.handleIconHide();
                    this.broadcast('BSelectDropdown', 'destroyPopper');
                    this.selectedLabel = '';
                    this.resetHoverIndex();
                    this.getOverflows();
                    if (this.selected) {
                        this.selectedLabel = this.selected.currentLabel;
                    }
                } else {
                    this.computeInputWidth();
                    this.handleIconShow();
                    this.broadcast('BSelectDropdown', 'updatePopper');
                    if (!this.dropdownUl) {
                        this.dropdownUl = this.$refs.popper.$el.querySelector('.b-select-dropdown__wrap');
                    } else {
                        this.setOverflow();
                    }
                }
                this.$emit('visible-change', val);
            },

            options(val) {
                if (this.$isServer) return;
                this.optionsAllDisabled = val.length === val.filter(item => item.disabled === true).length;

                let inputs = this.$el.querySelectorAll('input');
                if ([].indexOf.call(inputs, document.activeElement) === -1) {
                    this.setSelected();
                }
            }
        },

        methods: {
            handleIconHide() {
                let icon = this.$el.querySelector('.b-input__icon');
                if (icon) {
                    removeClass(icon, 'is-reverse');
                }
            },

            handleIconShow() {
                let icon = this.$el.querySelector('.b-input__icon');
                if (icon && !hasClass(icon, 'b-icon-circle-close')) {
                    addClass(icon, 'is-reverse');
                }
            },

            getOverflows() {
                if (this.dropdownUl && this.selected && this.selected.$el) {
                    let selectedRect = this.selected.$el.getBoundingClientRect();
                    let popperRect = this.$refs.popper.$el.getBoundingClientRect();
                    this.bottomOverflowBeforeHidden = selectedRect.bottom - popperRect.bottom;
                    this.topOverflowBeforeHidden = selectedRect.top - popperRect.top;
                }
            },

            setOverflow() {
                if (this.bottomOverflowBeforeHidden > 0) {
                    this.$nextTick(() => {
                        this.dropdownUl.scrollTop += this.bottomOverflowBeforeHidden;
                    });
                } else if (this.topOverflowBeforeHidden < 0) {
                    this.$nextTick(() => {
                        this.dropdownUl.scrollTop += this.topOverflowBeforeHidden;
                    });
                }
            },

            getOption(value) {
                let option;
                for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
                    const cachedOption = this.cachedOptions[i];
                    if (cachedOption.value === value) {
                        option = cachedOption;
                        break;
                    }
                }
                if (option) return option;
                const label = typeof value === 'string' || typeof value === 'number'
                        ? value : '';
                let newOption = {
                    value: value,
                    currentLabel: label
                };
                return newOption;
            },

            setSelected() {
                let option = this.getOption(this.value);
                this.selectedLabel = option.currentLabel;
                this.selected = option;
            },

            handleFocus() {
                this.visible = true;
            },

            handleIconClick(event) {
                if (this.iconClass.indexOf('circle-close') > -1) {
                    this.deleteSelected(event);
                } else {
                    this.toggleMenu();
                }
            },

            handleMouseDown(event) {
                if (event.target.tagName !== 'INPUT') return;
                if (this.visible) {
                    this.handleClose();
                    event.preventDefault();
                }
            },

            doDestroy() {
                this.$refs.popper.doDestroy();
            },

            handleClose() {
                this.visible = false;
            },

            resetHoverIndex() {
                setTimeout(() => {
                    this.hoverIndex = this.options.indexOf(this.selected);
                }, 300);
            },

            handleOptionSelect(option) {
                this.$emit('input', option.value);
                this.visible = false;
            },

            toggleMenu() {
                if (!this.disabled) {
                    this.visible = !this.visible;
                }
            },

            navigateOptions(direction) {
                if (!this.visible) {
                    this.visible = true;
                    return;
                }
                if (this.options.length === 0) return;
                if (!this.optionsAllDisabled) {
                    if (direction === 'next') {
                        this.hoverIndex++;
                        if (this.hoverIndex === this.options.length) {
                            this.hoverIndex = 0;
                        }
                        this.resetScrollTop();
                        if (this.options[this.hoverIndex].disabled === true ||
                                !this.options[this.hoverIndex].visible) {
                            this.navigateOptions('next');
                        }
                    }
                    if (direction === 'prev') {
                        this.hoverIndex--;
                        if (this.hoverIndex < 0) {
                            this.hoverIndex = this.options.length - 1;
                        }
                        this.resetScrollTop();
                        if (this.options[this.hoverIndex].disabled === true ||
                                !this.options[this.hoverIndex].visible) {
                            this.navigateOptions('prev');
                        }
                    }
                }
            },

            resetScrollTop() {
                let bottomOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().bottom -
                        this.$refs.popper.$el.getBoundingClientRect().bottom;
                let topOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().top -
                        this.$refs.popper.$el.getBoundingClientRect().top;
                if (bottomOverflowDistance > 0) {
                    this.dropdownUl.scrollTop += bottomOverflowDistance;
                }
                if (topOverflowDistance < 0) {
                    this.dropdownUl.scrollTop += topOverflowDistance;
                }
            },

            selectOption() {
                if (this.options[this.hoverIndex]) {
                    this.handleOptionSelect(this.options[this.hoverIndex]);
                }
            },

            deleteSelected(event) {
                event.stopPropagation();
                this.$emit('input', '');
                this.visible = false;
            },

            onOptionDestroy(option) {
                this.optionsCount--;
                let index = this.options.indexOf(option);
                if (index > -1) {
                    this.options.splice(index, 1);
                }
                this.broadcast('BOption', 'resetIndex');
            },

            computeInputWidth () {
                this.inputWidth = this.$el.getBoundingClientRect().width + 'px';
            }
        },

        created() {
            this.setSelected();

            this.$on('handleOptionClick', this.handleOptionSelect);
            this.$on('onOptionDestroy', this.onOptionDestroy);
            this.$on('setSelected', this.setSelected);
        }
    };
</script>
