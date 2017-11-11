import '../date-picker/src/less/time-picker.less'
import TimePicker from '../date-picker/src/picker/time-picker.js';

/* istanbul ignore next */
TimePicker.install = function(Vue) {
  Vue.component(TimePicker.name, TimePicker);
};

export default TimePicker;
