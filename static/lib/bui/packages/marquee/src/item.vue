<template>
  <div
    v-show="ready"
    class="b-marquee__item"
    :class="{
      'is-active': active,
      'is-in-stage': inStage,
      'is-hover': hover
    }"
    :style="{
      msTransform: `translateY(${ translate }px)`,
      webkitTransform: `translateY(${ translate }px)`,
      transform: `translateY(${ translate }px)`
    }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'BMarqueeItem',

    props: {
      name: String
    },

    data() {
      return {
        hover: false,
        translate: 0,
        active: false,
        ready: false,
        inStage: false
      };
    },

    methods: {
      processIndex(index, activeIndex, length) {
        if (activeIndex === 0 && index === length - 1) {
          return -1;
        } else if (activeIndex === length - 1 && index === 0) {
          return length;
        } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
          return length + 1;
        } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
          return -2;
        }
        return index;
      },

      calculateTranslate(index, activeIndex, parentHeight) {
        if (this.inStage) {
          return parentHeight * ((index - activeIndex) + 1) / 4;
        } else if (index < activeIndex) {
          return - parentHeight / 2;
        } else {
          return parentHeight;
        }
      },

      translateItem(index, activeIndex) {
        const parentHeight = this.$parent.$el.offsetHeight;
        const length = this.$parent.items.length;
        if (index !== activeIndex && length > 2) {
          index = this.processIndex(index, activeIndex, length);
        }

        this.active = index === activeIndex;
        this.translate = parentHeight * (index - activeIndex);
        this.ready = true;
      }
    },

    created() {
      this.$parent && this.$parent.handleItemChange();
    },

    destroyed() {
      this.$parent && this.$parent.handleItemChange();
    }
  };
</script>
