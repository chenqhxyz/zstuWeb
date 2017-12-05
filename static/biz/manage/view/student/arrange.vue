<template>
   <el-table :data="arrangeModel" style="width: 1000px">
        <el-table-column width="200" prop="lesson" label="课程">
        </el-table-column>
        <el-table-column width="200" prop="lab" label="地点">
        </el-table-column>
        <el-table-column width="200" prop="teacher" label="教师">
        </el-table-column>
        <el-table-column width="200" prop="time" label="上课时间">
        </el-table-column>
        <el-table-column width="200" prop="theClass" label="班级">
        </el-table-column>
    </el-table>
</template>

<script>
import util from '../../../../util/util';
    export default {
        props: ['theClass'],
        data() {
            return {
                arrangeModel: []
            }
        },
        methods: {
        },
        mounted() {
            util.arrange(5, '', this.theClass).then((resp) => {
                this.arrangeModel.splice(0);
                resp.data.forEach((item) => {
                    const obj = {};
                    obj.lab = item.lab;
                    obj.lesson = item.lesson;
                    obj.teacher = item.teacher;
                    obj.time = item.time;
                    obj.theClass = item.theClass;
                    this.arrangeModel.push(obj);
                })
            })
        }
    }
</script>

<style lang="less">
  
</style>