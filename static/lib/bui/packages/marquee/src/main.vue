<template>
  <div
    class="b-marquee"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave">
    <div
      class="b-marquee__container"
      :style="{ 'height': height, 'line-height': height }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import throttle from 'throttle-debounce/throttle';
import debounce from 'throttle-debounce/debounce';

export default {
  name: 'BMarquee',

  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    height: String,
    interval: {
      type: String,
      default: '3000'
    },
    type: String
  },

  data() {
    return {
      items: [],
      activeIndex: -1,
      containerWidth: 0,
      timer: null,
      hover: false
    };
  },

  watch: {
    items(val) {
      if (val.length > 0) this.setActiveItem(0);
    },

    activeIndex(val, oldVal) {
      this.resetItemPosition();
      this.$emit('change', val, oldVal);
    }
  },

  methods: {
    handleMouseEnter() {
      this.hover = true;
      this.pauseTimer();
    },

    handleMouseLeave() {
      this.hover = false;
      this.startTimer();
    },

    updateItems() {
      this.items = this.$children.filter(child => child.$options.name === 'BMarqueeItem');
    },

    resetItemPosition() {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex);
      });
    },

    playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else {
        this.activeIndex = 0;
      }
    },

    pauseTimer() {
      clearInterval(this.timer);
    },

    startTimer() {
      if (this.interval <= 0) return;
      this.timer = setInterval(this.playSlides, this.interval);
    },

    setActiveItem(index) {
      if (typeof index === 'string') {
        const filteredItems = this.items.filter(item => item.name === index);
        if (filteredItems.length > 0) {
          index = this.items.indexOf(filteredItems[0]);
        }
      }
      index = Number(index);
      if (isNaN(index) || index !== Math.floor(index)) {
        process.env.NODE_ENV !== 'production' &&
        console.warn('[Bui Warn][Marquee]index must be an integer.');
        return;
      }
      let length = this.items.length;
      if (index < 0) {
        this.activeIndex = length - 1;
      } else if (index >= length) {
        this.activeIndex = 0;
      } else {
        this.activeIndex = index;
      }
    },

    prev() {
      this.setActiveItem(this.activeIndex - 1);
    },

    next() {
      this.setActiveItem(this.activeIndex + 1);
    }

  },

  created() {
    this.handleItemChange = debounce(100, this.updateItems);
  },

  mounted() {
    this.updateItems();
    this.$nextTick(() => {
      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex;
      }
      this.startTimer();
    });
  },

};
</script>
