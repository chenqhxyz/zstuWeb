<template>
  <transition name="b-message-fade">
    <div
      class="b-message"
      :class="[typeClass,customClass]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer">
      <span class="b-message__img" :class="[ iconDefaultClass]" v-if="!iconClass && !isHtml"></span>
      <div class="b-message__group" :class="{ 'is-with-icon': iconClass }">
        <i class="b-message__icon" :class="iconClass" v-if="iconClass && !isHtml"></i>
        <p v-if="isHtml" v-html="message"></p><p v-else>{{ message }}</p>
        <div v-if="showClose" class="b-message__closeBtn b-icon-close" @click="close"></div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
    const TYPE_CLASSES_MAP = {
        'success': 'b-icon-circle-check',
        'warning': 'b-icon-warning',
        'error': 'b-icon-circle-cross',
        'loading': 'b-icon-loading'
      };
    export default {
        data() {
          return {
            visible: false,
            message: '',
            isHtml: false,
            duration: 3000,
            type: 'info',
            iconClass: '',
            customClass: '',
            onClose: null,
            showClose: false,
            closed: false,
            timer: null
          };
        },

        computed: {
          typeClass() {
            return `b-message--${ this.type }`;
          },
          iconDefaultClass() {
            return TYPE_CLASSES_MAP[this.type] || 'b-icon-information';
          },
        },

        watch: {
          closed(newVal) {
            if (newVal) {
              this.visible = false;
              this.$el.addEventListener('transitionend', this.destroyElement);
            }
          }
        },

        methods: {
          destroyElement() {
            this.$el.removeEventListener('transitionend', this.destroyElement);
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
          },

          close() {
            this.closed = true;
            if (typeof this.onClose === 'function') {
              this.onClose(this);
            }
          },

          clearTimer() {
            clearTimeout(this.timer);
          },

          startTimer() {
            if (this.duration > 0) {
              this.timer = setTimeout(() => {
                if (!this.closed) {
                  this.close();
                }
              }, this.duration);
            }
          }
        },

        mounted() {
          this.startTimer();
        }
    };
</script>
