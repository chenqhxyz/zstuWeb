import './src/radio.less';
import Radio from './src/radio.vue';

/* istanbul ignore next */
Radio.install = function(Vue) {
  Vue.component('el-radio', Radio);
};

export default Radio;
