<template>
    <div>
        <el-container>
            <el-header>
                <div class="student-center">学生个人中心<span class="greeting">你好，{{respName}} (请先填写好个人信息，才能进行其他操作噢)</span></div>
            </el-header>
            <el-main>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">实验课程安排</el-menu-item>
                    <el-menu-item index="2">实验报告上传</el-menu-item>
                    <el-menu-item index="3">下载教学资料</el-menu-item>
                    <el-menu-item index="4" v-if="showInf">信息填写</el-menu-item>
                </el-menu>
                <arrange v-if="indexControll === 1" :the-class="theClass"></arrange>
                <report v-if="indexControll === 2"></report>
                <exp v-if="indexControll === 3"></exp>
                <detail v-if="indexControll === 4" :resp-name="respName" :resp-account="respAccount"></detail>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import util from '../../../util/util.js';
import Detail from './student/detail.vue';
import Exp from './student/exp.vue';
import Arrange from './student/arrange.vue';
import Report from './student/report.vue';
    export default {
        props: ['respName', 'respAccount'],
        data() {
            return {
                showInf: true,
                activeIndex: '4',
                indexControll: 4,
                theClass: ''
            };
        },
        mounted() {
            util.sendNotice(1).then((resp) => {
                this.$notify({
                    title: '通知',
                    message: resp.data[0].content,
                    duration: 0
                });
                util.opStudent(0, this.respAccount).then((resp) => {
                    if(resp.data) {
                        this.showInf = false;
                        this.activeIndex = '1';
                        this.indexControll = 1;
                        this.theClass = resp.data.theClass;
                    }
                })
            })
        },
        methods: {
            handleSelect(key) {
                this.indexControll = +key;
            }
        },
        components: {
            Detail,
            Arrange,
            Exp,
            Report
        }
    }
</script>
               
<style lang="less">
    .student-center {
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