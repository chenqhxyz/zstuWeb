import './src/marquee.less';
import Marquee from './src/main.vue';

/* istanbul ignore next */
Marquee.install = function(Vue) {
  Vue.component(Marquee.name, Marquee);
};

export default Marquee;
