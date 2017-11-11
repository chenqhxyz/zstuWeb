<template>
  <div class="b-time-spinner" :class="{ 'has-seconds': showSeconds }">
    <b-scrollbar
      @scroll="handleScroll('hour')"
      class="b-time-spinner__wrapper"
      view-class="b-time-spinner__list"
      noresize
      tag="ul"
      ref="hour">
      <li
        @click="handleClick('hours', { value: hour, disabled: disabled }, true)"
        v-for="(disabled, hour) in hoursList"
        track-by="hour"
        class="b-time-spinner__item"
        :class="{ 'active': hour === hours, 'disabled': disabled }"
        v-text="hour"></li>
    </b-scrollbar>
    <b-scrollbar
      @scroll="handleScroll('minute')"
      class="b-time-spinner__wrapper"
      view-class="b-time-spinner__list"
      noresize
      tag="ul"
      ref="minute">
      <li
        @click="handleClick('minutes', key, true)"
        v-for="(minute, key) in 60"
        class="b-time-spinner__item"
        :class="{ 'active': key === minutes }"
        v-text="key"></li>
    </b-scrollbar>
    <b-scrollbar
      v-show="showSeconds"
      @scroll="handleScroll('second')"
      class="b-time-spinner__wrapper"
      view-class="b-time-spinner__list"
      noresize
      tag="ul"
      ref="second">
      <li
        @click="handleClick('seconds', key, true)"
        v-for="(second, key) in 60"
        class="b-time-spinner__item"
        :class="{ 'active': key === seconds }"
        v-text="key"></li>
    </b-scrollbar>
  </div>
</template>

<script>
  import { getRangeHours } from '../util';
  import BScrollbar from 'packages/scrollbar';

  export default {
    components: { BScrollbar },

    props: {
      hours: {
        type: Number,
        default: 0
      },

      minutes: {
        type: Number,
        default: 0
      },

      seconds: {
        type: Number,
        default: 0
      },

      showSeconds: {
        type: Boolean,
        default: true
      }
    },

    watch: {
      hoursPrivate(newVal, oldVal) {
        if (!(newVal >= 0 && newVal <= 23)) {
          this.hoursPrivate = oldVal;
        }
        this.hourEl.scrollTop = Math.max(0, (this.hoursPrivate - 2.5) * 32 + 80);
        this.$emit('change', { hours: newVal });
      },

      minutesPrivate(newVal, oldVal) {
        if (!(newVal >= 0 && newVal <= 59)) {
          this.minutesPrivate = oldVal;
        }
        this.minuteEl.scrollTop = Math.max(0, (this.minutesPrivate - 2.5) * 32 + 80);
        this.$emit('change', { minutes: newVal });
      },

      secondsPrivate(newVal, oldVal) {
        if (!(newVal >= 0 && newVal <= 59)) {
          this.secondsPrivate = oldVal;
        }
        this.secondEl.scrollTop = Math.max(0, (this.secondsPrivate - 2.5) * 32 + 80);
        this.$emit('change', { seconds: newVal });
      }
    },

    computed: {
      hoursList() {
        return getRangeHours(this.selectableRange);
      },

      hourEl() {
        return this.$refs.hour.wrap;
      },

      minuteEl() {
        return this.$refs.minute.wrap;
      },

      secondEl() {
        return this.$refs.second.wrap;
      }
    },

    data() {
      return {
        hoursPrivate: 0,
        minutesPrivate: 0,
        secondsPrivate: 0,
        selectableRange: []
      };
    },

    methods: {
      handleClick(type, value, disabled) {
        if (value.disabled) {
          return;
        }

        this[type + 'Private'] = value.value >= 0 ? value.value : value;

        this.emitSelectRange(type);
      },

      emitSelectRange(type) {
         // 有问题
        if (type === 'hours') {
          this.$emit('select-range', 0, 2);
        } else if (type === 'minutes') {
          this.$emit('select-range', 3, 5);
        } else if (type === 'seconds') {
          this.$emit('select-range', 6, 8);
        }
      },

      handleScroll(type) {
        const ajust = {};

        ajust[`${type}s`] = Math.min(Math.floor((this[`${type}El`].scrollTop - 80) / 32 + 3), 59);
        this.$emit('change', ajust);
      },

      ajustScrollTop() {
        this.hourEl.scrollTop = Math.max(0, (this.hours - 2.5) * 32 + 80);
        this.minuteEl.scrollTop = Math.max(0, (this.minutes - 2.5) * 32 + 80);
        this.secondEl.scrollTop = Math.max(0, (this.seconds - 2.5) * 32 + 80);
      }
    }
  };
</script>
