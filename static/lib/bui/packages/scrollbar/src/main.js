// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js

import { addResizeListener, removeResizeListener } from 'src/utils/resize-event';
import scrollbarWidth from 'src/utils/scrollbar-width';
import * as util from './util';
import Bar from './bar';

/* istanbul ignore next */
export default {
  name: 'BScrollbar',

  components: { Bar },

  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },

  data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },

  computed: {
    wrap() {
      return this.$refs.wrap;
    }
  },

  render(h) {
    let gutter = scrollbarWidth();
    let style = this.wrapStyle;

    if (gutter) {
      const gutterWith = `-${gutter}px`;

      if (Array.isArray(this.wrapStyle)) {
        style = util.toObject(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`;
      }
    }
    const view = h(this.tag, {
      class: ['b-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);
    const wrap = (
      <div
        ref="wrap"
        style={ style }
        onScroll={ this.handleScroll }
        class={ [this.wrapClass, 'b-scrollbar__wrap b-scrollbar__wrap--hidden-default'] }>
        { [view] }
      </div>
    );
    let nodes;

    if (!this.native) {
      nodes = ([
        wrap,
        <Bar
          move={ this.moveX }
          size={ this.sizeWidth }></Bar>,
        <Bar
          vertical
          move={ this.moveY }
          size={ this.sizeHeight }></Bar>
      ]);
    } else {
      nodes = ([
        <div
          ref="wrap"
          class={ [this.wrapClass, 'b-scrollbar__wrap'] }
          style={ style }>
          { [view] }
        </div>
      ]);
    }
    return h('div', { class: 'b-scrollbar' }, nodes);
  },

  methods: {
    handleScroll() {
      const wrap = this.wrap,
            scroll = {
                top: wrap.scrollTop,
                left: wrap.scrollLeft
            };
      this.moveY = ((scroll.top * 100) / wrap.clientHeight);
      this.moveX = ((scroll.left * 100) / wrap.clientWidth);
      this.$emit('scroll',scroll);
    },

    update() {
      let heightPercentage, widthPercentage;
      const wrap = this.wrap;

      heightPercentage = (wrap.clientHeight * 100 / wrap.scrollHeight);
      widthPercentage = (wrap.clientWidth * 100 / wrap.scrollWidth);

      this.sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%') : '';
      this.sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%') : '';
    }
  },

  mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && addResizeListener(this.$refs.resize, this.update);
  },

  destroyed() {
    if (this.native) return;
    !this.noresize && removeResizeListener(this.$refs.resize, this.update);
  }
};
