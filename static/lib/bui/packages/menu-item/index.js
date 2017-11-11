import MenuItem from '../menu/src/menu-item.vue';

/* istanbul ignore next */
MenuItem.install = function(Vue) {
  Vue.component(MenuItem.name, MenuItem);
};

export default MenuItem;
