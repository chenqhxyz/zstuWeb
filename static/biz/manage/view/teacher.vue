<template>
    <div>
        <el-container>
            <el-header>
                <div class="teacher-center">教师个人中心<span class="greeting">你好，{{respName}} (请先填写好个人信息，才能进行其他操作噢)</span></div>
            </el-header>
            <el-main>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">实验课程安排</el-menu-item>
                    <el-menu-item index="2">实验报告下载</el-menu-item>
                    <el-menu-item index="3" :resp-name="respName">上传教学资料</el-menu-item>
                    <el-menu-item index="4">信息填写</el-menu-item>
                </el-menu>
                <arrange v-if="indexControll === 1" :resp-name="respName"></arrange>
                <report v-if="indexControll === 2"></report>
                <exp v-if="indexControll === 3"></exp>
                <personal v-if="indexControll === 4" :resp-name="respName"></personal>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import Personal from './teacher/personal.vue';
import Arrange from './teacher/arrange.vue';
import Exp from './teacher/exp.vue';
import Report from './teacher/report.vue';
    export default {
        props: ['respName'],
        data() {
            return {
                activeIndex: '4',
                indexControll: 4
            };
        },
        mounted() {
        },
        methods: {
            handleSelect(key) {
                this.indexControll = +key;
            }
        },
        components: {
            Personal,
            Arrange,
            Exp,
            Report
        }
    }
</script>
               
<style lang="less">
    .teacher-center {
        margin-left: 10px;
        float: left;
        font-size: 40px;
        color: #173af0;
    }
    .greeting {
        margin-left: 8px;
        font-size: 16px;
        color: #5c75f5;
    }
</style>