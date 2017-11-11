import Pagination from './src/pagination.js';
import './src/pagination.less';

/* istanbul ignore next */
Pagination.install = function(Vue) {
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;
