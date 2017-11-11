<template>
  <div
    class="b-select-dropdown"
    :class="[popperClass]"
    :style="{ minWidth: minWidth }">
    <slot></slot>
  </div>
</template>

<script>
  import './select-dropdown.less';
  import Popper from 'src/utils/vue-popper';

  export default {
    name: 'BSelectDropdown',

    componentName: 'BSelectDropdown',

    mixins: [Popper],

    props: {
      placement: {
        default: 'bottom-start'
      },

      boundariesPadding: {
        default: 0
      },

      options: {
        default() {
          return {
            forceAbsolute: true,
            gpuAcceleration: false
          };
        }
      }
    },

    data() {
      return {
        minWidth:''
      };
    },

    computed: {
      popperClass() {
        return this.$parent.popperClass;
      }
    },

    watch: {
        '$parent.inputWidth' (val) {
            this.minWidth = val;
        }
    },

    mounted() {
      this.referenceElm = this.$parent.$refs.reference.$el;
      this.$parent.popperElm = this.popperElm = this.$el;
      this.$on('updatePopper', this.updatePopper);
      this.$on('destroyPopper', this.destroyPopper);
    }
  };
</script>
