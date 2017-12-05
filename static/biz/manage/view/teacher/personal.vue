<template>
    <div>
        <div>
            指导课程：<el-button type="primary" @click="addLessons">增加课程</el-button>
            <div v-for="(item, index) in lessons">
                <el-input v-model="item.name" class="classInput"></el-input>
                <el-button type="primary" @click="deleteLessons(index)">删除课程</el-button>
            </div>
        </div>
        <div>
            负责班级：<el-button type="primary" @click="addClass">增加班级</el-button>
            <div v-for="(item, index) in classes">
                <el-input v-model="item.name" class="classInput"></el-input>
                <el-button type="primary" @click="deleteClasses(index)">删除课程</el-button>
            </div>
        </div>
        <el-button type="primary" @click="confirm">确认</el-button>
    </div>
</template>
<script>
import util from '../../../../util/util.js';
    export default {
        props: ['respName'],
        data() {
            return {
                classes: [],
                lessons: []
            };
        },
        mounted() {
            this.initTeacher();
        },
        methods: {
            initTeacher() {
                util.getTeacher(this.respName).then((resp) => {
                    this.classes.splice(0);
                    this.lessons.splice(0);
                    const classes = JSON.parse(resp.data.classes);
                    const lessons = JSON.parse(resp.data.lessons);
                    this.classes = this.classes.concat(classes);
                    this.lessons = this.lessons.concat(lessons);
                });
            },
            addClass() {
                const obj = {
                    name: ''
                };
                this.classes.push(obj);
            },
            addLessons() {
                const obj = {
                    name: ''
                };
                this.lessons.push(obj);
            },
            deleteLessons(index) {
                this.lessons.splice(index, 1);
            },
            deleteClasses(index) {
                this.classes.splice(index, 1);
            },
            confirm() {
                const inputclasses = JSON.stringify(this.classes);
                const inputLessons = JSON.stringify(this.lessons);
                util.teacherInf(0, this.respName, inputLessons, inputclasses).then((resp) => {
                    this.initTeacher();
                    this.$message({
                        message: resp.msg,
                        type: 'success'
                    });
                });
            }
        },
        components: {
        }
    }
</script>
               
<style lang="less">
    .classInput {
        margin: 10px;
        width: 220px;
    }
</style>