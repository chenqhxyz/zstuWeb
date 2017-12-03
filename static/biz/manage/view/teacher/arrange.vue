<template>
    <div>
        <el-button type="primary" @click="showArrange(1)">增加课程安排</el-button>

        <el-table :data="tableData" style="width: 400px">
            <el-table-column prop="name" label="实验课程安排" width="180">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button type="primary" @click="killArrange(scope.row.name)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="实验课程安排" :visible.sync="arrangeShow" :show-close="false">
            <el-form :model="arrangeModel">
                <el-form-item label="安排名称" :label-width="formLabelWidth">
                    <el-input v-model="arrangeModel.name" class="input"></el-input>
                </el-form-item>
                <el-form-item label="上课班级" :label-width="formLabelWidth">
                    <el-radio v-for="(item, index) in classes" :label="index" v-model="arrangeModel.class">{{item}}</el-radio>
                </el-form-item>
                <el-form-item label="课程" :label-width="formLabelWidth">
                    <el-radio v-for="(item, index) in lessons" :label="index" v-model="arrangeModel.lesson">{{item}}</el-radio>
                </el-form-item>
                <el-form-item label="实验室" :label-width="formLabelWidth">
                    <el-radio v-for="(item, index) in labs" :label="index" v-model="place">{{item}}</el-radio>
                </el-form-item>
                <el-form-item label="上课时间" :label-width="formLabelWidth">
                    <el-radio v-for="(item, index) in time" :label="index" v-model="arrangeModel.time">{{item}}</el-radio>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="arrangeShow = false">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import util from '../../../../util/util.js';
    export default {
        props: ['respName'],
        data() {
            return {
                formLabelWidth: '120px',
                type: 0,
                arrangeShow: false,
                classes: [],
                lessons: [],
                labs: [],
                times: [],
                time: [],
                place: 0,
                arrangeModel: {
                    name: '',
                    class: 0,
                    lesson: 0,
                    time: 0
                },
                tableData: []
            };
        },
        watch: {
            place(val) {
                this.time.splice(0);
                this.time = this.time.concat(JSON.parse(this.times[val]));
            }
        },
        mounted() {
            util.getTeacher(this.respName).then((resp) => {
                this.classes.splice(0);
                const classes = JSON.parse(resp.data.classes);
                classes.forEach((item) => {
                    this.classes.push(item.name);
                });
                this.lessons.splice(0);
                const lessons = JSON.parse(resp.data.lessons);
                lessons.forEach((item) => {
                    this.lessons.push(item.name);
                });
                util.getLab().then((resp) => {
                    this.time.splice(0);
                    this.times.splice(0);
                    this.labs.splice(0);
                    resp.data.forEach((item) => {
                        this.labs.push(item.labName);
                        this.times.push(item.reserveTime);
                    });
                    this.time = this.time.concat(JSON.parse(this.times[0]));
                    this.initArrange();
                })
            });
        },
        methods: {
            initArrange() {
                util.arrange(4, '', '', '', '', '', this.respName).then((resp) => {
                    this.tableData.splice(0);
                    resp.data.forEach((item) => {
                        const obj = {
                            name: item.name
                        };
                        this.tableData.push(obj);
                    });
                })
            },
            showArrange(type) {
                this.type = +type;
                const obj = {
                    name: '',
                    class: 0,
                    lesson: 0,
                    time: 0
                };
                this.arrangeModel = Object.assign({}, obj);
                this.place = 0;
                this.time.splice(0);
                this.time = this.time.concat(JSON.parse(this.times[0]));
                this.arrangeShow = true;
            },
            confirm() {
                const type = this.type;
                const name = this.arrangeModel.name;
                const theClass = this.classes[this.arrangeModel.class];
                const lesson = this.lessons[this.arrangeModel.lesson];
                const lab = this.labs[this.place];
                const time = this.time[this.arrangeModel.time];
                util.arrange(type, name, theClass, lesson, lab, time, this.respName).then((resp) => {
                    this.initArrange();
                    this.arrangeShow = false;
                    this.$message({
                        message: resp.msg,
                        type: 'success'
                    });
                })
            },
            killArrange(name) {
                this.$confirm('此操作将永久删除此次安排, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                        util.arrange(3, name).then((resp) => {
                            this.initArrange();
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                    });
            }
        },
        components: {
        }
    }
</script>
               
<style lang="less">
    .input {
        width: 220px;
    }
</style>