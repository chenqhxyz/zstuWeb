import './table-column.less';
import BTableColumn from '../table/src/table-column';

/* istanbul ignore next */
BTableColumn.install = function(Vue) {
  Vue.component(BTableColumn.name, BTableColumn);
};

export default BTableColumn;
