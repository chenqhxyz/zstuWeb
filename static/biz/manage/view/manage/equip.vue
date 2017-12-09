<template>
    <div>
        <el-button type="primary" @click="typein">实验设备录入</el-button>

        <el-table :data="equipData" style="width: 800px" v-show="hasE">
            <el-table-column prop="equipName" label="设备名称" width="180">
            </el-table-column>
            <el-table-column prop="position" label="存放地点" width="180">
            </el-table-column>
            <el-table-column prop="amount" label="数量">
            </el-table-column>
            <el-table-column label="编辑">
                <template slot-scope="scope">
                    <el-button @click="editDialog(scope.row.equipName, scope.row.position, scope.row.amount)" type="primary" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="实验设备录入" :visible.sync="equipVisible" :show-close=false>
            <el-form :model="form">
                <el-form-item label="设备名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" class="input"></el-input>
                </el-form-item>
                <el-form-item label="设备存放地点" :label-width="formLabelWidth">
                    <el-input v-model="form.repository" class="input"></el-input>
                </el-form-item>
                <el-form-item label="设备库存" :label-width="formLabelWidth">
                    <el-input v-model="form.amounts" class="input"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="equipVisible = false">取 消</el-button>
                <el-button type="primary" @click="equip">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog :title="editModal.name" :visible.sync="editVisible" :show-close=false>
                <el-form :model="form">
                    <el-form-item label="设备存放地点" :label-width="formLabelWidth">
                        <el-input v-model="editModal.repository" class="input"></el-input>
                    </el-form-item>
                    <el-form-item label="设备库存" :label-width="formLabelWidth">
                        <el-input v-model="editModal.amounts" class="input"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="editVisible = false">取 消</el-button>
                    <el-button type="primary" @click="edit">确 定</el-button>
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
                equipData: [],
                equipVisible: false,
                editVisible: false,
                form: {
                    name: '',
                    repository: '',
                    amounts: ''
                },
                editModal: {},
                formLabelWidth: '120px'
            };
        },
        methods: {
            getData() {
                this.equipData.splice(0);
                util.getEquip().then((resp) => {
                    this.equipData = this.equipData.concat(resp.data);
                    if (this.equipData.length === 0) {
                        this.hasE = false;
                    }
                });
            },
            typein() {
                this.equipVisible = true;
                this.form.name = '';
                this.form.repository = '';
                this.form.amounts = '';
            },
            equip() {
                this.equipVisible = false;
                util.addEquip(this.form.name, this.form.repository, +this.form.amounts).then((resp) => {
                    this.getData();
                    this.form.name = '';
                    this.form.repository = '';
                    this.form.amounts = '';
                    this.$message({
                        message: resp.msg,
                        type: 'success'
                    });
                });
            },
            editDialog(name, position, amounts) {
                const editEquip = {
                    oldRepository: position,
                    oldAmounts: amounts,
                    name,
                    repository: position,
                    amounts
                };
                Object.assign(this.editModal, editEquip);
                this.editVisible = true;
            },
            edit() {
                util.editEquip(this.editModal).then((resp) => {
                    this.editVisible = false;
                    this.$message({
                        message: resp.msg,
                        type: 'success'
                    });
                    this.getData();
                })
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style lang="less">
    .input {
        width: 220px;
    }
</style>