<template>
    <div>
        <el-row>
            <el-button type="primary" @click="showAdd">新增实验室信息</el-button>
        </el-row>
        <el-dialog  title="新增实验室信息" :visible.sync="addModal" :show-close=false :close-on-click-modal=false>
                <el-form :model="addInf">
                    <el-form-item label="实验室名称" :label-width="formLabelWidth">
                        <el-input v-model="addInf.labName" class="input"></el-input>
                    </el-form-item>
                    <el-form-item label="管理员" :label-width="formLabelWidth">
                        <el-input v-model="addInf.manager" class="input"></el-input>
                    </el-form-item>
                    <el-form-item label="实验设备" :label-width="formLabelWidth">
                        <el-button type="primary" icon="el-icon-circle-plus-outline" @click="addEquip"></el-button>
                    </el-form-item>
                    <el-form-item label="" :label-width="formLabelWidth" v-for="(item, index) in addInf.equips">
                        <el-input v-model="item.name" class="input" placeholder="请输入器材名称"></el-input>
                        <el-input v-model="item.num" class="input" placeholder="请输入器材数量"></el-input>
                        <el-button type="primary" icon="el-icon-delete" @click="deleteEquip(index)"></el-button>
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
                formLabelWidth: '120px'
            };
        },
        methods: {
            confirmAdd() {
                const name = this.addInf.labName;
                const manager = this.addInf.manager;
                const equips = JSON.stringify(this.addInf.equips);
                const available = JSON.stringify(this.addInf.available);
                util.addLab(name, manager, equips, available);
                // console.log(name);
                this.addModal = false;
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
            addEquip() {
                const obj = {
                    name: '',
                    num: ''
                };
                this.addInf.equips.push(obj);
            },
            deleteEquip(index) {
                this.addInf.equips.splice(index, 1);
            }
        },
        mounted() {
            util.getLab();
        }
    }
</script>

<style lang="less">
    .input {
        width: 220px;
    }
</style>