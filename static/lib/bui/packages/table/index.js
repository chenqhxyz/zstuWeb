import './src/table.less';
import BTable from './src/table';

/* istanbul ignore next */
BTable.install = function(Vue) {
  Vue.component(BTable.name, BTable);
};

export default BTable;
