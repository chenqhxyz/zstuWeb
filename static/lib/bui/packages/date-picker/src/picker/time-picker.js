import Picker from '../picker.vue';
import TimePanel from '../panel/time.vue';
import TimeRangePanel from '../panel/time-range.vue';

export default {
  mixins: [Picker],

  name: 'BTimePicker',

  props: {
    isRange: Boolean
  },

  data() {
    return {
      type: ''
    };
  },

  created() {
    this.type = this.isRange ? 'timerange' : 'time';
    this.panel = this.isRange ? TimeRangePanel : TimePanel;
  }
};
