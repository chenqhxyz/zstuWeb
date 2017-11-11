import Tree from './src/tree.vue';
import './src/tree.less'

/* istanbul ignore next */
Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree);
};

export default Tree;
