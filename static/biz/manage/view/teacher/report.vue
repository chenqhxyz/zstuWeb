<template>
    <el-table :data="reportModel" style="width: 600px">
        <el-table-column width="200" label="文件">
            <template slot-scope="scope">
                <a :href="scope.row.url">{{scope.row.name}}</a>
            </template>
        </el-table-column>
        <el-table-column width="200" prop="student" label="上传者">
        </el-table-column>
        <el-table-column width="200" prop="theClass" label="所属班级">
        </el-table-column>
    </el-table>
</template>

<script>
import util from '../../../../util/util';
    export default {
        data() {
            return {
                reportModel: []
            }
        },
        methods: {
        },
        mounted() {
            util.teacherInf(1).then((resp) => {
                this.reportModel.splice(0);
                const classes = JSON.parse(resp.data);
                classes.forEach((item) =>{
                    util.opReports(2, '', item.name).then((resp) => {
                        this.reportModel = this.reportModel.concat(resp.data);
                    })
                })
            })
        }
    }
</script>

<style lang="less">
  
</style>