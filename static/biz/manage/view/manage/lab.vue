<template>
    <div>
        <el-row>
            <el-button type="primary" @click="showAdd">新增实验室信息</el-button>
        </el-row>
        <el-table :data="tableModal" style="width: 800px" v-if="hasE">
            <el-table-column prop="labName" label="实验室名称" width="180">
            </el-table-column>
            <el-table-column prop="manager" label="管理员" width="180">
            </el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                    <el-button @click="editDialog(scope.row.equipment, scope.row.labName, scope.row.manager, scope.row.reserveTime)" type="primary" size="small">修改</el-button>
                </template>
</el-table-column>
</el-table>

<el-dialog title="新增实验室信息" :visible.sync="addModal" :show-close=false :close-on-click-modal=false>
    <el-form :model="addInf">
        <el-form-item label="实验室名称" :label-width="formLabelWidth">
            <el-input v-model="addInf.labName" class="input"></el-input>
        </el-form-item>
        <el-form-item label="管理员" :label-width="formLabelWidth">
            <el-input v-model="addInf.manager" class="input"></el-input>
        </el-form-item>
        <el-form-item label="实验设备" :label-width="formLabelWidth">
            <el-button type="primary" icon="el-icon-circle-plus-outline" @click="addEquip(1)"></el-button>
        </el-form-item>
        <el-form-item label="" :label-width="formLabelWidth" v-for="(item, index) in addInf.equips">
            <el-input v-model="item.name" class="input" placeholder="请输入器材名称"></el-input>
            <el-input v-model="item.num" class="input" placeholder="请输入器材数量"></el-input>
            <el-button type="primary" icon="el-icon-delete" @click="deleteEquip(index, 1)"></el-button>
        </el-form-item>
        <el-form-item label="可预约时间段" :label-width="formLabelWidth">
            <el-checkbox-group v-model="addInf.available">
                <el-checkbox label="周一早上"></el-checkbox>
                <el-checkbox label="周一下午"></el-checkbox>
                <el-checkbox label="周一晚上"></el-checkbox>
                <el-checkbox label="周二早上"></el-checkbox>
                <el-checkbox label="周二下午"></el-checkbox>
                <el-checkbox label="周二晚上"></el-checkbox>
                <el-checkbox label="周三早上"></el-checkbox>
                <el-checkbox label="周三下午"></el-checkbox>
                <el-checkbox label="周三晚上"></el-checkbox>
                <el-checkbox label="周四早上"></el-checkbox>
                <el-checkbox label="周四下午"></el-checkbox>
                <el-checkbox label="周四晚上"></el-checkbox>
                <el-checkbox label="周五早上"></el-checkbox>
                <el-checkbox label="周五下午"></el-checkbox>
                <el-checkbox label="周五晚上"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
                    <el-button @click="addModal = false">取 消</el-button>
                    <el-button type="primary" @click="confirmAdd">确 定</el-button>
                </span>
</el-dialog>

<el-dialog :title="editModel.name" :visible.sync="showEdit" :show-close=false :close-on-click-modal=false>
    <el-form :model="addInf">
        <el-form-item label="管理员" :label-width="formLabelWidth">
            <el-input v-model="editModel.manager" class="input"></el-input>
        </el-form-item>
        <el-form-item label="实验设备" :label-width="formLabelWidth">
            <el-button type="primary" icon="el-icon-circle-plus-outline" @click="addEquip(2)"></el-button>
        </el-form-item>
        <el-form-item label="" :label-width="formLabelWidth" v-for="(item, index) in editModel.equip">
            <el-input v-model="item.name" class="input" placeholder="请输入器材名称"></el-input>
            <el-input v-model="item.num" class="input" placeholder="请输入器材数量"></el-input>
            <el-button type="primary" icon="el-icon-delete" @click="deleteEquip(index, 2)"></el-button>
        </el-form-item>
        <el-form-item label="可预约时间段" :label-width="formLabelWidth">
            <el-checkbox-group v-model="editModel.time">
                <el-checkbox label="周一早上"></el-checkbox>
                <el-checkbox label="周一下午"></el-checkbox>
                <el-checkbox label="周一晚上"></el-checkbox>
                <el-checkbox label="周二早上"></el-checkbox>
                <el-checkbox label="周二下午"></el-checkbox>
                <el-checkbox label="周二晚上"></el-checkbox>
                <el-checkbox label="周三早上"></el-checkbox>
                <el-checkbox label="周三下午"></el-checkbox>
                <el-checkbox label="周三晚上"></el-checkbox>
                <el-checkbox label="周四早上"></el-checkbox>
                <el-checkbox label="周四下午"></el-checkbox>
                <el-checkbox label="周四晚上"></el-checkbox>
                <el-checkbox label="周五早上"></el-checkbox>
                <el-checkbox label="周五下午"></el-checkbox>
                <el-checkbox label="周五晚上"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
                    <el-button @click="showEdit = false">取 消</el-button>
                    <el-button type="primary" @click="confirmEdit">确 定</el-button>
                </span>
</el-dialog>
</div>
</template>

<script>
    import util from '../../../../util/util';
    export default {
        data() {
            return {
                addModal: false,
                addInf: {
                    labName: '',
                    manager: '',
                    equips: [],
                    available: []
                },
                formLabelWidth: '120px',
                tableModal: [],
                hasE: true,
                showEdit: false,
                editModel: {
                    equip: '',
                    name: '',
                    manager: '',
                    time: ''
                }
            };
        },
        methods: {
            confirmAdd() {
                const name = this.addInf.labName;
                const manager = this.addInf.manager;
                const equips = JSON.stringify(this.addInf.equips);
                const available = JSON.stringify(this.addInf.available);
                util.addLab(name, manager, equips, available);
                this.addModal = false;
                util.getLab().then((resp) => {
                    this.tableModal.splice(0);
                    this.tableModal = this.tableModal.concat(resp.data);
                });
            },
            showAdd() {
                const defaultLabInf = {
                    labName: '',
                    manager: '',
                    equips: [],
                    available: []
                };
                this.addInf = Object.assign({}, defaultLabInf);
                this.addModal = true;
            },
            addEquip(type) {
                const obj = {
                    name: '',
                    num: ''
                };
                if (type === 1) {
                    this.addInf.equips.push(obj);
                } else if (type === 2) {
                    this.editModel.equip.push(obj);
                }
            },
            deleteEquip(index, type) {
                if (type === 1) {
                    this.addInf.equips.splice(index, 1);
                } else if (type === 2) {
                    this.editModel.equip.splice(index, 1);
                }
            },
            editDialog(equip, name, manager, time) {
                equip = JSON.parse(equip);
                time = JSON.parse(time);
                const defaultLabInf = {
                    equip: '',
                    name: '',
                    manager: [],
                    time: []
                };
                this.editModel = Object.assign({}, defaultLabInf);
                this.editModel.equip = equip;
                this.editModel.name = name;
                this.editModel.manager = manager;
                this.editModel.time = time;
                this.showEdit = true;
            },
            confirmEdit() {
                const equip = JSON.stringify(this.editModel.equip);
                const time = JSON.stringify(this.editModel.time);
                util.editLab(this.editModel.name, this.editModel.manager, time, equip).then((resp) => {
                    this.showEdit = false;
                    this.$message({
                        message: resp.msg,
                        type: 'success'
                    });
                    util.getLab().then((resp) => {
                        this.tableModal.splice(0);
                        this.tableModal = this.tableModal.concat(resp.data);
                    });
                });
            }
        },
        mounted() {
            util.getLab().then((resp) => {
                if (resp.length === 0) {
                    this.hasE = false;
                } else {
                    this.tableModal.splice(0);
                    this.tableModal = this.tableModal.concat(resp.data);
                }
            });
        }
    }
</script>

<style lang="less">
    .input {
        width: 220px;
    }
</style>