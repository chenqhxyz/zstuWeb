import './src/tabs.less';
import Tabs from './src/tabs.vue';

/* istanbul ignore next */
Tabs.install = function(Vue) {
  Vue.component(Tabs.name, Tabs);
};

export default Tabs;
