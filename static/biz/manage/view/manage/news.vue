<template>
    <div>
        <el-button type="primary" @click="showPassageEdit">添加文章</el-button>
        <el-table :data="tableModel" style="width: 700px" v-if="hasE">
            <el-table-column width="500">
                <template slot-scope="scope">
                    <div class="title" @click="editPassage(scope.row.title, scope.row.content, scope.row.id)">{{scope.row.title}}</div>
                </template>
            </el-table-column>
            <el-table-column width="200">
                <template slot-scope="s">
                    <el-button type="primary" @click="deletePassage(s.row.id)">删除文章</el-button>
                </template>
            </el-table-column>
        </el-table>

<el-dialog title="编辑文章" :show-close=false :visible.sync="passageShow">
    <el-input placeholder="文章标题" v-model="passageModel.title"></el-input>
    <el-input type="textarea" placeholder="文章内容" class="passage" :rows='20' v-model="passageModel.content"></el-input>
    <span slot="footer" class="dialog-footer">
        <el-button @click="passageShow = false">取 消</el-button>
        <el-button type="primary" @click="uploadPassage">确 定</el-button>
    </span>
</el-dialog>
</div>
</template>

<script>
    import util from '../../../../util/util';
    export default {
        data() {
            return {
                hasE: true,
                passageShow: false,
                passageModel: {
                    type: 1,
                    title: '',
                    content: ''
                },
                tableModel: []
            }
        },
        methods: {
            showPassageEdit() {
                const obj = {
                    type: 1,
                    title: '',
                    content: ''
                };
                this.passageModel = Object.assign({}, obj);
                this.passageShow = true;
            },
            uploadPassage() {
                if (this.passageModel.type === 1) {
                    util.addPass(this.passageModel.title, this.passageModel.content).then((resp) => {
                        this.passageShow = false;
                        util.getPass().then((resp) => {
                            this.tableModel.splice(0);
                            this.tableModel = this.tableModel.concat(resp.data);
                            this.$message({
                                message: '文章输入成功',
                                type: 'success'
                            });
                        });
                    });
                } else if (this.passageModel.type === 2) {
                    util.editPass(this.passageModel.id, this.passageModel.title, this.passageModel.content).then((resp) => {
                        util.getPass().then((resp) => {
                            this.tableModel.splice(0);
                            this.tableModel = this.tableModel.concat(resp.data);
                            this.$message({
                                message: '文章修改成功',
                                type: 'success'
                            });
                            this.passageShow = false;
                        });
                    });
                }
            },
            editPassage(title, content, id) {
                const obj = {
                    type: 2,
                    title,
                    content,
                    id
                };
                this.passageModel = Object.assign({}, obj);
                this.passageShow = true;
            },
            deletePassage(id) {
                this.$confirm('确定删除该文章?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    util.deletePass(id).then((resp) => {
                        util.getPass().then((resp) => {
                            this.tableModel.splice(0);
                            this.tableModel = this.tableModel.concat(resp.data);
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        });
                    });
                }).catch(() => {});
            }
        },
        mounted() {
            util.getPass().then((resp) => {
                if (resp.data.length === 0) {
                    this.hasE = false;
                } else {
                    this.tableModel.splice(0);
                    this.tableModel = this.tableModel.concat(resp.data);
                }
            })
        }
    }
</script>

<style lang="less">
    .passage {
        margin-top: 10px;
        overflow-y: scroll;
    }
    
    .title {
        cursor: pointer;
        &:hover {
            color: #87c5fa;
        }
    }
</style>