import './src/checkbox.less';
import Checkbox from './src/checkbox.vue';

/* istanbul ignore next */
Checkbox.install = function(Vue) {
  Vue.component(Checkbox.name, Checkbox);
};

export default Checkbox;
