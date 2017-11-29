<template>
        <el-container>
            <el-aside width="200px">
                <el-menu class="el-menu-vertical" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
                    <el-menu-item index="1" class="el-item">
                        <span slot="title">实验设备管理</span>
                    </el-menu-item>
                    <el-menu-item index="2" class="el-item">
                        <span slot="title">实验室运行管理</span>
                    </el-menu-item>
                    <el-menu-item index="3" class="el-item">
                        <span slot="title">信息采集与发布</span>
                    </el-menu-item>
                    <el-menu-item index="4" class="el-item">
                        <span slot="title">消息/通知推送</span>
                    </el-menu-item>
                    <el-menu-item index="5" class="el-item">
                        <span slot="title">实验报告管理</span>
                    </el-menu-item>
                    <el-menu-item index="6" class="el-item">
                        <span slot="title">教学文档管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <div class="hello" v-if="index === 0">你好，管理员</div>
                <equip v-if="index === 1"></equip>
                <lab v-if="index === 2"></lab>
                <news v-if="index === 3"></news>
                <message v-if="index===4"></message>
                <document v-if="index===6"></document>
            </el-main>
        </el-container> 
</template>
<script>
    import Equip from './manage/equip.vue';
    import Lab from './manage/lab.vue';
    import News from './manage/news.vue';
    import Message from './manage/message.vue';
    import Document from './manage/document.vue';
    export default {
        props: ['respName'],
        data() {
            return {
                index: 0
            };
        },
        methods: {
            handleSelect(key) {
                this.index = +key;
            }
        },
        components: {
            Equip,
            Lab,
            News,
            Message,
            Document
        }
    }
</script>

<style lang="less">
    .el-menu-vertical {
        width: 200px;
        height: 950px;
        cursor: pointer;
        .el-item {
            overflow: hidden;
            height: 50px;
            line-height: 50px;
        }
    }
    
    .hello {
        position: absolute;
        left: 0;
        top: 300px;
        width: 100%;
        text-align: center;
        font-size: 80px;
        color: #5b75b7;
    }
</style>