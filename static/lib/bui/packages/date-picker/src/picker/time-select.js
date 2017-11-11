import Picker from '../picker.vue';
import Panel from '../panel/time-select.vue';

export default {
  mixins: [Picker],

  name: 'BTimeSelect',

  beforeCreate() {
    this.type = 'time-select';
    this.panel = Panel;
  }
};
