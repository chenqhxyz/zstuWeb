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
                    <el-menu-item index="7" class="el-item">
                        <span slot="title">教师个人中心</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <div class="hello" v-if="index === 0">你好，{{respName}}</div>
                <equip v-if="index === 1"></equip>
                <lab v-if="index === 2"></lab>
                <news v-if="index === 3"></news>
                <message v-if="index===4"></message>
                <report v-if="index===5"></report>
                <document v-if="index===6"></document>
                <teacher v-if="index===7" :resp-name="respName"></teacher>
            </el-main>
        </el-container> 
</template>
<script>
    import Teacher from './teacher.vue';
    import Equip from './manage/equip.vue';
    import Lab from './manage/lab.vue';
    import News from './manage/news.vue';
    import Message from './manage/message.vue';
    import Report from './manage/report.vue';
    import Document from './manage/document.vue';
    export default {
        props: ['respName', ''],
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
            Report,
            Document,
            Teacher
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
            height: 40px;
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