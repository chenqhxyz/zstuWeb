<template>
    <el-table :data="expModel" style="width: 400px">
        <el-table-column width="200" label="文件名">
            <template slot-scope="scope">
                <a :href="scope.row.url">{{scope.row.name}}</a>
            </template>
        </el-table-column>
        <el-table-column width="200" prop="teacher" label="教师">
        </el-table-column>
    </el-table>
</template>

<script>
import util from '../../../../util/util';
    export default {
        data() {
            return {
                expModel: []
            }
        },
        methods: {
        },
        mounted() {
            util.getExps(0).then((resp) => {
                resp.data.forEach((item) => {
                    this.expModel.push(item);
                })
            })
        }
    }
</script>

<style lang="less">
  
</style>