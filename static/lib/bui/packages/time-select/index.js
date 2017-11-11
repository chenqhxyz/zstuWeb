import '../date-picker/src/less/time-select.less';
import TimeSelect from '../date-picker/src/picker/time-select.js';

/* istanbul ignore next */
TimeSelect.install = function(Vue) {
  Vue.component(TimeSelect.name, TimeSelect);
};

export default TimeSelect;
