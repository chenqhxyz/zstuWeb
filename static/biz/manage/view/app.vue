<template>
    <div>
        <components :is="currentView" :resp-name="respName" :resp-account="respAccount"></components>
        <div class="back" @click="back">
            <i class="el-icon-back"></i> 
        </div>
    </div>
</template>

<script>
    import util from '../../../util/util.js';
    import Manager from './manager.vue';
    import Student from './student.vue';
    import Teacher from './teacher.vue';
    export default {
        data() {
            return {
                respName: '',
                respAccount: '',
                currentView: ''
            };
        },
        methods: {
            back() {
                window.location.href = '//local.zstu.com';
            }
        },
        created() {
            util.checkLogin().then((resp) => {
                if (!resp.success) {
                    window.location.href = 'http://local.zstu.com';
                }
                this.respAccount = resp.account;
                this.respName = resp.name;
                if (+resp.type === 1) {
                    this.currentView = 'Student';
                } else if (+resp.type === 2) {
                    this.currentView = 'Manager';
                }
            });
        },
        components: {
            Manager,
            Student,
            Teacher
        }
    }
</script>

<style lang="less">
    @import '../../reset.less';
    .reset();
    .back {
        position: fixed;
        right: 100px;
        bottom: 100px;
        z-index: 9999;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 50%;
        background: #2888d9;
        cursor: pointer;
        .el-icon-back {
            color: #fff;
            font-size: 20px;
        }
        &:hover {
            background: #87c5fa;
        }
    }
</style>