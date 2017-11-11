import './src/less/date-picker.less'
import DatePicker from './src/picker/date-picker.js';

/* istanbul ignore next */
DatePicker.install = function install(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker;
