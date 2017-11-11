<template>
  <div
    class="b-progress"
    :class="[
      'b-progress--line',
      status ? 'is-' + status : '',
      {
        'b-progress--without-text': !showText,
        'b-progress--text-inside': textInside,
      }
    ]"
  >
    <div class="b-progress-bar">
      <div class="b-progress-bar__outer" :style="{height: strokeWidth + 'px'}">
        <div class="b-progress-bar__inner" :style="barStyle">
          <div class="b-progress-bar__innerText" v-if="showText && textInside">{{percentage}}%</div>
        </div>
      </div>
    </div>
    <div
      class="b-progress__text"
      v-if="showText && !textInside"
      :style="{fontSize: progressTextSize + 'px'}"
    >
      <template v-if="!status">{{percentage}}%</template>
      <i v-else :class="iconClass"></i>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'BProgress',
    componentName: 'BProgress',
    props: {
      percentage: {
        type: Number,
        default: 0,
        validator: val => val >= 0 && val <= 100
      },
      status: String,
      strokeWidth: {
        type: Number,
        default: 6
      },
      textInside: Boolean,
      showText: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      barStyle() {
        var style = {};
        style.width = this.percentage + '%';
        return style;
      },
      iconClass() {
          return this.status === 'success' ? 'b-icon-circle-check' : 'b-icon-circle-cross';
      },
      progressTextSize() {
        return 12 + this.strokeWidth * 0.4;
      }
    }
  };
</script>
