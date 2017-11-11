<template>
    <div>
        <b-row class="b-page-header">
            <a href="/">
                <h1 style="float: left;">
                    BUI
                    <span>用一次就会了</span>
                </h1>
            </a>
            <b-menu style="float: right;margin-right:40px;background-color:transparent;" mode="horizontal">
                <b-menu-item index="2">
                    <a target="_blank" href="http://git.husor.com/fed/bui">源码库</a>
                </b-menu-item>
                <b-submenu index="1">
                    <template slot="title">BUI脚手架</template>
                    <b-menu-item index="1-1"><a href="http://git.husor.com.cn/fed/bui-boot2" target="_blank">多页应用</a>
                    </b-menu-item>
                    <b-menu-item index="1-2"><a href="http://git.husor.com.cn/fed/bui-boot" target="_blank">单页应用</a>
                    </b-menu-item>
                </b-submenu>
            </b-menu>
        </b-row>
        <div class="b-page-body">
            <div class="b-sidebar-menu-wrapper">
                <b-menu class="sidebar-menu" :default-openeds="menus.default_opends" router ref="sidebar">
                    <b-submenu v-for="sub_menu in menus.sub_menu" :index="sub_menu.index">
                        <span class="menu-title" slot="title">{{sub_menu.title}}</span>
                        <template v-for="group in sub_menu.menu_item">
                            <b-menu-item v-if="!group.menu_item" class="menu-item" :index="group.index">
                                {{group.title}}
                            </b-menu-item>
                            <b-menu-item-group v-else :title="group.title">
                                <b-menu-item v-for="item in group.menu_item" class="menu-item" :index="item.index">
                                    {{item.title}}
                                </b-menu-item>
                            </b-menu-item-group>
                        </template>
                    </b-submenu>
                </b-menu>
            </div>
            <div class="b-page-container" ref="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app',
        props: {
            menus: {
                required: true,
                type: Object
            }
        },
        watch: {
            $route(newVal) {
                //处理左侧导航栏选中问题
                this.$refs.sidebar.handleItemClick({index: newVal.path});
                this.$refs.container.scrollTop = 0;
            }
        },
        mounted() {
            this.$refs.sidebar.handleItemClick({index: this.$route.path});
        }
    }
</script>
