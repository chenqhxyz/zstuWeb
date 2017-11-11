<template>
  <div class="b-tab-pane" v-show="active">
    <slot></slot>
  </div>
  
</template>
<script>
  export default {
    name: 'BTabPane',

    componentName: 'BTabPane',

    props: {
      label: String,
      labelContent: Function,
      name: String,
      closable: Boolean,
      disabled: Boolean,
      isRadio:true
    },

    data() {
      return {
        index: null
      };
    },

    computed: {
      isClosable() {
        return this.closable || this.$parent.closable;
      },
      active() {
        return this.$parent.currentName === (this.name || this.index);
      }
    },

    mounted() {
      this.$parent.addPanes(this);
    },

    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      this.$parent.removePanes(this);
    },

    watch: {
      label() {
        this.$parent.$forceUpdate();
      }
    }
  };
</script>
