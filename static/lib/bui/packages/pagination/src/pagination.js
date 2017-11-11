import Pager from './pager.vue';

export default {
  name: 'BPagination',

  props: {
    pageSize: {
      type: Number,
      default: 10
    },

    small: Boolean,

    infinPage: Boolean,

    total: Number,

    pageCount: Number,

    currentPage: {
      type: Number,
      default: 1
    },

    layout: {
      default: 'prev, pager, next, jumper, ->, total'
    }

  },

  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0
    };
  },

  render(h) {
    let template = (<div class='b-pagination'></div>);
    const layout = this.layout || '';
    if (!layout) return;
    const TEMPLATE_MAP = {
      infin: <infin></infin>,
      prev: <prev></prev>,
      jumper: <jumper></jumper>,
      pager: <pager currentPage={ this.internalCurrentPage } pageCount={ this.internalPageCount } on-change={ this.handleCurrentChange }></pager>,
      next: <next></next>,
      slot: <my-slot></my-slot>,
      total: <total></total>
    };
    const components = layout.split(',').map((item) => item.trim());
    const rightWrapper = (<div class="b-pagination__rightwrapper"></div>);
    let haveRightWrapper = false;

    if (this.small) {
      template.data.class += ' b-pagination--small';
    }

    if(this.infinPage) {
      template.data.class += ' b-pagination--infin';
    }

    components.forEach(compo => {
      if (compo === '->') {
        haveRightWrapper = true;
        return;
      }

      if (!haveRightWrapper) {
        template.children.push(TEMPLATE_MAP[compo]);
      } else {
        rightWrapper.children.push(TEMPLATE_MAP[compo]);
      }
    });

    if (haveRightWrapper) {
      template.children.push(rightWrapper);
    }

    return template;
  },

  components: {
    MySlot: {
      render(h) {
        return (
          this.$parent.$slots.default
          ? this.$parent.$slots.default[0]
          : ''
        );
      }
    },
    infin: {
      render(h) {
        return (
          <span class="b-pagination__infin">当前位置 { Math.round(this.$parent.internalCurrentPage / this.$parent.internalPageCount * 100) }%</span>
        );
      }
    },
    Prev: {
      render(h) {
        return (
          <button
            type="button"
            class={['btn-prev', { disabled: this.$parent.internalCurrentPage <= 1 }]}
            on-click={ this.$parent.prev }>
            <i class="b-icon b-icon-arrow-left"></i>
          </button>
        );
      }
    },

    Next: {
      render(h) {
        return (
          <button
            type="button"
            class={[
              'btn-next',
              { disabled: this.$parent.internalCurrentPage === this.$parent.internalPageCount || this.$parent.internalPageCount === 0 }
            ]}
            on-click={ this.$parent.next }>
            <i class="b-icon b-icon-arrow-right"></i>
          </button>
        );
      }
    },

    Jumper: {
      data() {
        return {
          oldValue: null
        };
      },

      methods: {
        handleFocus(event) {
          this.oldValue = event.target.value;
        },

        handleChange({ target }) {
          this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(target.value);
          this.oldValue = null;
        }
      },

      render(h) {
        return (
          <span class="b-pagination__jump">
            跳转
            <input
              class="b-pagination__editor"
              type="number"
              min={ 1 }
              max={ this.internalPageCount }
              domProps-value={ this.$parent.internalCurrentPage }
              on-change={ this.handleChange }
              on-focus={ this.handleFocus }
              number/>
            页
            <b-button>GO</b-button>
          </span>
        );
      }
    },

    Total: {
      render(h) {
        return (
          typeof this.$parent.total === 'number'
            ? <span class="b-pagination__total">共 { this.$parent.total } 条</span>
            : ''
        );
      }
    },

    Pager
  },

  methods: {
    handleCurrentChange(val) {
      this.internalCurrentPage = this.getValidCurrentPage(val);
    },

    prev() {
      const newVal = this.internalCurrentPage - 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);
    },

    next() {
      const newVal = this.internalCurrentPage + 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);
    },

    getValidCurrentPage(value) {
      value = parseInt(value, 10);

      const havePageCount = typeof this.internalPageCount === 'number';

      let resetValue;
      if (!havePageCount) {
        if (isNaN(value) || value < 1) resetValue = 1;
      } else {
        if (value < 1) {
          resetValue = 1;
        } else if (value > this.internalPageCount) {
          resetValue = this.internalPageCount;
        }
      }

      if (resetValue === undefined && isNaN(value)) {
        resetValue = 1;
      } else if (resetValue === 0) {
        resetValue = 1;
      }

      return resetValue === undefined ? value : resetValue;
    }
  },

  computed: {
    internalPageCount() {
      if (typeof this.total === 'number') {
        return Math.ceil(this.total / this.internalPageSize);
      } else if (typeof this.pageCount === 'number') {
        return this.pageCount;
      }
      return null;
    }
  },

  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = val;
      }
    },

    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = val;
      }
    },

    internalCurrentPage(newVal, oldVal) {
      newVal = parseInt(newVal, 10);

      /* istanbul ignore if */
      if (isNaN(newVal)) {
        newVal = oldVal || 1;
      } else {
        newVal = this.getValidCurrentPage(newVal);
      }

      if (newVal !== undefined) {
        this.$nextTick(() => {
          this.internalCurrentPage = newVal;
          if (oldVal !== newVal) {
            this.$emit('current-change', this.internalCurrentPage);
          }
        });
      } else {
        this.$emit('current-change', this.internalCurrentPage);
      }
    },

    internalPageCount(newVal) {
      /* istanbul ignore if */
      const oldPage = this.internalCurrentPage;
      if (newVal > 0 && oldPage === 0) {
        this.internalCurrentPage = 1;
      } else if (oldPage > newVal) {
        this.internalCurrentPage = newVal === 0 ? 1 : newVal;
      }
    }
  }
};
