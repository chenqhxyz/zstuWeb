module.exports = {
  computed: {
    indexPath() {
      var path = [this.index];
      var parent = this.$parent;
      while (parent.$options.componentName !== 'BMenu') {
        if (parent.index) {
          path.unshift(parent.index);
        }
        parent = parent.$parent;
      }
      return path;
    },
    rootMenu() {
      var parent = this.$parent;
      while (
        parent &&
        parent.$options.componentName !== 'BMenu'
      ) {
        parent = parent.$parent;
      }
      return parent;
    },
    parentMenu() {
      let parent = this.$parent;
      while (
        parent &&
        ['BMenu', 'BSubmenu'].indexOf(parent.$options.componentName) === -1
      ) {
        parent = parent.$parent;
      }
      return parent;
    },
    paddingStyle() {
      if (this.rootMenu.mode !== 'vertical') return {};

      let padding = 20;
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'BMenu') {
        if (parent.$options.componentName === 'BSubmenu' || parent.$options.componentName === 'BMenuItemGroup') {
          padding += 24;
        }
        parent = parent.$parent;
      }
      return {paddingLeft: padding + 'px'};
    }
  }
};
