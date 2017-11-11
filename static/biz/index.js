import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import app from './views/app.vue';

Vue.use(ElementUI);

new Vue(Vue.util.extend({
    el: '#app'
}, {
    render(createElement) {
        return createElement(app);
    }
}));