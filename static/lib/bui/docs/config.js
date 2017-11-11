/**
 * 菜单的配置信息
 */
const config = {
    default_opends: ['1', '2', '3'],
    sub_menu: [
        {
            index: '1',
            title: '使用帮助',
            menu_item: [
                {
                    title: 'WHY',
                    index: '/why',
                    component: require('./app/system/why.md')
                },
                {
                    title: '介绍',
                    index: '/main',
                    component: require('./app/system/main.md')
                },
                {
                    title: '快速上手',
                    index: '/use',
                    component: require('./app/system/use.md')
                },
                {
                    title: '静态引入',
                    index: '/install',
                    component: require('./app/system/install.md')
                },
                {
                    title: '更新日志',
                    index: '/log',
                    component: require('./app/system/log.vue')
                },
                {
                    title: 'FAQ',
                    index: '/faq',
                    component: require('./app/system/faq.md')
                },
            ]
        },
        {
            index: '2',
            title: '基础组件',
            menu_item: [
                {
                    title: '基础类',
                    menu_item: [
                        {
                            title: '栅格',
                            index: '/grid',
                            component: require('./app/biz/grid.md')
                        },
                        {
                            title: '字体',
                            index: '/typography',
                            component: require('./app/biz/typography.md')
                        },
                        {
                            title: '图标',
                            index: '/icon',
                            component: require('./app/biz/icon.md')
                        },
                        {
                            title: '按钮',
                            index: '/button',
                            component: require('./app/biz/button.md')
                        },
                    ]
                },
                {
                    title: '表单类',
                    menu_item: [
                        {
                            title: '单选框',
                            index: '/radio',
                            component: require('./app/biz/radio.md')
                        },
                        {
                            title: '多选框',
                            index: '/checkbox',
                            component: require('./app/biz/checkbox.md')
                        },
                        {
                            title: '开关',
                            index: '/switch',
                            component: require('./app/biz/switch.md')
                        },
                        {
                            title: '输入框',
                            index: '/input',
                            component: require('./app/biz/input.md')
                        },
                        {
                            title: '选择器',
                            index: '/select',
                            component: require('./app/biz/select.md')
                        },
                        {
                            title: '日期',
                            index: '/date-picker',
                            component: require('./app/biz/date-picker.md')
                        },
                        {
                            title: '时间',
                            index: '/time-picker',
                            component: require('./app/biz/time-picker.md')
                        },
                        {
                            title: '上传',
                            index: '/upload',
                            component: require('./app/biz/upload.md')
                        },
                        {
                            title: '表单',
                            index: '/form',
                            component: require('./app/biz/form.md')
                        },
                    ]
                },
                {
                    title: '数据类',
                    menu_item: [
                        {
                            title: '表格',
                            index: '/table',
                            component: require('./app/biz/table.md')
                        },
                        {
                            title: '分页',
                            index: '/pagination',
                            component: require('./app/biz/pagination.md')
                        },
                        {
                            title: '进度条',
                            index: '/progress',
                            component: require('./app/biz/progress.md')
                        },
                        {
                            title: '树形控件',
                            index: '/tree',
                            component: require('./app/biz/tree.md')
                        },
                        {
                            title: '标签',
                            index: '/tag',
                            component: require('./app/biz/tag.md')
                        },
                    ]
                },
                {
                    title: '数据可视化',
                    menu_item: [

                    ]
                },
                {
                    title: '导航类',
                    menu_item: [
                        {
                            title: '导航栏',
                            index: '/menu',
                            component: require('./app/biz/menu.md')
                        },
                        {
                            title: 'tab切换',
                            index: '/tabs',
                            component: require('./app/biz/tabs.md')
                        },
                        {
                            title: '面包屑',
                            index: '/breadcrumb',
                            component: require('./app/biz/breadcrumb.md')
                        },
                    ]
                },
                {
                    title: '提示类',
                    menu_item: [
                        {
                            title: '警告',
                            index: '/alert',
                            component: require('./app/biz/alert.md')
                        },
                        {
                            title: '对话框',
                            index: '/dialog',
                            component: require('./app/biz/dialog.md')
                        },
                        {
                            title: '气泡',
                            index: '/tooltip',
                            component: require('./app/biz/tooltip.md')
                        },
                        {
                            title: '消息提示',
                            index: '/message',
                            component: require('./app/biz/message.md')
                        },
                        {
                            title: '弹窗提示',
                            index: '/message-box',
                            component: require('./app/biz/message-box.md')
                        },
                        {
                            title: '滚动字幕',
                            index: '/marquee',
                            component: require('./app/biz/marquee.md')
                        },
                    ]
                },
            ]
        },
        {
            index:'3',
            title:'业务应用',
            menu_item:[
                {
                    title:'商家中心',
                    index:'/sjzx',
                    component:require('./app/apply/sjzx.vue')
                }
            ]
        }
    ]
};

// 菜单处理,去除无用的component属性
const menus = getMenu(config);

function getMenu(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    let rtn = Object.assign({}, obj);
    if ('sub_menu' in rtn) {
        rtn.sub_menu = rtn.sub_menu.map(item => {
            return getMenu(item);
        });
    }
    if ('menu_item' in rtn) {
        rtn.menu_item = rtn.menu_item.map(item => {
            return getMenu(item);
        });
    }
    if ('component' in rtn) {
        delete rtn.component;
    }
    return rtn;
}

// 路由处理,取出所有包含component的路由信息
const routes = [];
getRoute(config);
routes.push({
    path: '*',
    redirect: '/main'
});

function getRoute(obj) {
    if (typeof obj !== 'object') {
        return;
    }
    if ('sub_menu' in obj) {
        obj.sub_menu.forEach(item => {
            getRoute(item);
        });
    }
    if ('menu_item' in obj) {
        obj.menu_item.forEach(item => {
            getRoute(item);
        });
    }
    if ('component' in obj && obj.index) {
        routes.push({
            path: obj.index,
            component: obj.component
        });
    }
}

export {
    menus,
    routes
}
