<template>
  <transition name="msgbox-fade">
    <div class="b-message-box__wrapper" v-show="value" @click.self="handleWrapperClick">
      <div class="b-message-box" :class="customClass">
        <div class="b-message-box__header" v-if="title !== undefined">
          <div class="b-message-box__title">{{ title || '提示' }}</div>
          <i class="b-message-box__close b-icon-close" @click="handleAction('cancel')" v-if="showClose"></i>
        </div>
        <div class="b-message-box__content" v-if="message !== ''">
          <div class="b-message-box__status" :class="[ typeClass ]"></div>
          <div class="b-message-box__message" :style="{ 'margin-left': typeClass ? '50px' : '0' }"><p v-if="isHtml" v-html="message"></p><p v-else>{{ message }}</p></div>
          <div class="b-message-box__input" v-show="showInput">
            <b-input v-model="inputValue" :placeholder="inputPlaceholder" ref="input"></b-input>
            <div class="b-message-box__errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="b-message-box__btns">
          <b-button
            :loading="cancelButtonLoading"
            :class="[ cancelButtonClasses ]"
            type="ghost"
            v-show="showCancelButton"
            @click.native="handleAction('cancel')">
            {{ cancelButtonText || '取消' }}
          </b-button>
          <b-button
            :loading="confirmButtonLoading"
            ref="confirm"
            :class="[ confirmButtonClasses ]"
            v-show="showConfirmButton"
            @click.native="handleAction('confirm')">
            {{ confirmButtonText || '确定' }}
          </b-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import Popup from 'src/utils/popup';
  import BInput from 'packages/input';
  import BButton from 'packages/button';
  import { addClass, removeClass } from 'src/utils/dom';

  let typeMap = {
    success: 'circle-check',
    info: 'information',
    warning: 'warning',
    error: 'circle-cross'
  };

  export default {
    mixins: [Popup],

    props: {
      modal: {
        default: true
      },
      lockScroll: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      }
    },

    components: {
      BInput,
      BButton
    },

    computed: {
      typeClass() {
        return this.type && typeMap[this.type] ? `b-icon-${ typeMap[this.type] }` : '';
      },

      confirmButtonClasses() {
        return `b-button--primary ${ this.confirmButtonClass }`;
      },
      cancelButtonClasses() {
        return `${ this.cancelButtonClass }`;
      }
    },

    methods: {
      getSafeClose() {
        const currentId = this.uid;
        return () => {
          this.$nextTick(() => {
            if (currentId === this.uid) this.doClose();
          });
        };
      },
      doClose() {
        if (!this.value) return;
        this.value = false;
        this._closing = true;

        this.onClose && this.onClose();

        if (this.lockScroll) {
          setTimeout(() => {
            if (this.modal && this.bodyOverflow !== 'hidden') {
              document.body.style.overflow = this.bodyOverflow;
              document.body.style.paddingRight = this.bodyPaddingRight;
            }
            this.bodyOverflow = null;
            this.bodyPaddingRight = null;
          }, 200);
        }
        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
        if (this.action) this.callback(this.action, this);
      },

      handleWrapperClick() {
        if (this.closeOnClickModal) {
          this.action = '';
          this.doClose();
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        this.action = action;
        if (typeof this.beforeClose === 'function') {
          this.close = this.getSafeClose();
          this.beforeClose(action, this, this.close);
        } else {
          this.doClose();
        }
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
            addClass(this.$refs.input.$el.querySelector('input'), 'invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
              addClass(this.$refs.input.$el.querySelector('input'), 'invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        removeClass(this.$refs.input.$el.querySelector('input'), 'invalid');
        return true;
      }
    },

    watch: {
      inputValue(val) {
        if (this.$type === 'prompt' && val !== null) {
            this.$nextTick(() => {
                if (this.$refs.input && this.$refs.input.$el) {
                    this.validate();
                }
            });
        }
      },

      value(val) {
        if (val) this.uid++;
        if (this.$type === 'alert' || this.$type === 'confirm') {
          this.$nextTick(() => {
            this.$refs.confirm.$el.focus();
          });
        }
        if (this.$type !== 'prompt') return;
        if (val) {
          this.$nextTick(() => {
            if (this.$refs.input && this.$refs.input.$el) {
              this.$refs.input.$el.querySelector('input').focus();
              this.validate();
            }
          });
        } else {
          this.editorErrorMessage = '';
          removeClass(this.$refs.input.$el.querySelector('input'), 'invalid');
        }
      }
    },

    data() {
      return {
        uid: 1,
        title: undefined,
        message: '',
        isHtml:false,
        type: '',
        customClass: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        action: '',
        confirmButtonText: '',
        cancelButtonText: '',
        confirmButtonLoading: false,
        cancelButtonLoading: false,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null
      };
    }
  };
</script>
