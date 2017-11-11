// @desc
// @author  wei.nan
// @date    17/1/24
import './index.less';
import 'highlight.js/styles/color-brewer.css';
import Vue from 'vue'
import VueRouter from 'vue-router';
import {menus, routes} from './config';
import directives from './app/common/directives/index.js'
import filters from './app/common/filters/index.js';
import demoBlock from './app/common/components/demo-block.vue';
import updateLog from './app/common/components/update-log.vue';
import Bui from 'src/index';
import app from './app.vue';


Vue.use(Bui);
Vue.use(VueRouter);
Vue.component("demoBlock", demoBlock);
Vue.component("updateLog", updateLog);
Vue.component(app.name, app);
Vue.config.devtools = true;

/**
 * 自定义指令
 */
Object.keys(directives).forEach(function (k) {
  Vue.directive(k, directives[k]);
});

/**
 * 自定义过滤器
 */
Object.keys(filters).forEach(function (k) {
  Vue.filter(k, filters[k]);
});

const router = new VueRouter({
  routes
});

/**
 * 入口
 */
new Vue({
  router,
  data(){
    return {
      menus
    }
  }
}).$mount('#app');

