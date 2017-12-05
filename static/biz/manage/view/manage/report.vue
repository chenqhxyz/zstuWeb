<template>
    <el-table :data="reportModel" style="width: 800px">
        <el-table-column width="200" label="文件">
            <template slot-scope="scope">
                <a :href="scope.row.url">{{scope.row.name}}</a>
            </template>
        </el-table-column>
        <el-table-column width="200" prop="student" label="上传者">
        </el-table-column>
        <el-table-column width="200" prop="theClass" label="所属班级">
        </el-table-column>
        <el-table-column width="200" label="操作">
            <template slot-scope="scope">
                <el-button size="small" type="primary" @click="deleteItem(scope.row.path)">删除</el-button>
            </template>
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
            deleteItem(path) {
                util.opReports(1, path).then((resp) => {
                    this.getInf();
                    this.$message({
                        message: resp.msg,
                        type: 'success'
                    });
                });
            },
            getInf() {
                util.opReports(3).then((resp) => {
                    this.reportModel.splice(0);
                    this.reportModel = this.reportModel.concat(resp.data);
                })
            }
        },
        mounted() {
            this.getInf();
        }
    }
</script>

<style lang="less">
  
</style>