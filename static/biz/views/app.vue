<template>
    <div>
        <div class="form-area" v-show="showModel === 1">
            <div class="title">登录</div>
            <div class="account">
                账号： <input type="text" class="account-input" v-model="account">
            </div>
            <div class="account">
                密码： <input type="password" class="account-input" v-model="password">
            </div>
            <div class="btt-area">
                <div class="register" @click="goRegister">注 册</div>
                <div class="login" @click="login">登 录</div>
            </div>
        </div>
        <div class="register-area" v-show="showModel === 2">
            <div class="title">注册</div>
            <div class="column">
                <input type="text" class="reg-input" v-model="realName" placeholder="真实姓名">
            </div>
            <div class="column">
                <input type="text" class="reg-input" v-model="regAcconut" placeholder="输入账号">
            </div>
            <div class="column">
                <input type="password" class="reg-input" v-model="regPass" placeholder="输入密码">
            </div>
            <div class="column">
                <input type="password" class="reg-input" v-model="repeatPass" placeholder="重复密码">
            </div>
            <div class="column">
                <el-radio-group v-model="radio">
                    <el-radio label="1">学生</el-radio>
                    <el-radio label="2">教师</el-radio>
                </el-radio-group>
            </div>
            <div class="column">
                <el-row>
                    <el-col :span="12" class="btt">
                        <el-button type="primary" @click="back">返回</el-button>
                    </el-col>
                    <el-col :span="12" class="btt">
                        <el-button type="success" @click="confirm">确认</el-button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
      
<script>
import register from '../../util/util';
    export default {
        data() {
            return {
                radio: '1',
                account: '',
                password: '',
                showModel: 1,
                realName: '',
                regAcconut: '',
                regPass: '',
                repeatPass: ''
            };
        },
        methods: {
            goRegister() {
                this.showModel++;
            },
            back() {
                this.showModel--;
            },
            confirm() {
                if (!this.realName) {
                    this.$message({
                        message: '请输入真实姓名',
                        type: 'warning'
                    });
                } else if (!this.regAcconut) {
                    this.$message({
                        message: '请输入账号',
                        type: 'warning'
                    });
                } else if (!this.regPass) {
                    this.$message({
                        message: '请输入密码',
                        type: 'warning'
                    });
                } else if (!this.repeatPass) {
                    this.$message({
                        message: '请重复输入密码',
                        type: 'warning'
                    });
                } else if (this.repeatPass !== this.regPass) {
                    this.$message({
                        message: '两次密码不一致',
                        type: 'warning'
                    });
                } else {
                    const info = `${this.realName},${this.regAcconut},${this.regPass},${this.radio}`;
                    register.register(info).then((res) => {
                        if (res.success) {
                            this.$message({
                                message: res.msg,
                                type: 'success'
                            });
                            this.showModel--;
                        } else {
                            this.$message({
                                message: '账号已被注册！',
                                type: 'warning'
                            });
                        }
                    });
                }
            },
            login() {
                if (!this.account) {
                    this.$message({
                        message: '请输入账号',
                        type: 'warning'
                    });
                } else if (!this.password) {
                    this.$message({
                        message: '请输入密码',
                        type: 'warning'
                    });
                } else {
                    register.login(this.account, this.password).then((resp) => {
                        if (resp.success) {
                            this.$message({
                                message: '登陆成功',
                                type: 'success'
                            });
                            window.location.href = '/zstu.html';
                        } else {
                            this.$message({
                                message: resp.msg,
                                type: 'warning'
                            });
                        }
                    });
                }
            }
        },
        mounted() {
        }
    }
</script>
      
<style lang="less">
html {
    height: 100%;
    overflow: hidden;
    background: url('//local.zstu.com/img/back.png') no-repeat;
    background-size: 100% 100%;
}       
.title {
        margin-top: 20px; 
        text-align: center;
        font-size: 30px;
        letter-spacing: 10px;
}
.form-area {
    overflow: hidden;
    margin: 200px auto;
    width: 600px;
    height: 400px;
    background: #fff;
    border-radius: 50px; 
    .account {
        margin-top: 50px;
        text-align: center;
    }
    .account-input {
        box-sizing: border-box; 
        padding-left: 10px;
        margin-right: 30px; 
        width: 300px;
        border: 1px solid #000;
    }
}
.btt-area {
    overflow: hidden;
    margin-top: 30px;
    .register {
        float: left;
        margin-left: 150px;
        background: #a2a2a2;
        width: 99px;
        height: 55px;
        font-size: 22px;
        line-height: 55px;
        text-align: center;
        border-radius: 20px;
        cursor: pointer;
        &:hover {
            background: #353336;
            color: #fff;
        }
    }
    .login {
        float: left;
        margin-left: 70px; 
        background: #0066d5;
        width: 99px;
        height: 55px;
        font-size: 22px;
        line-height: 55px;
        text-align: center;
        border-radius: 20px;
        cursor: pointer;
        &:hover {
            background: #2d5b61;
            color: #fff;
        }
    }
}
.register-area {
    overflow: hidden;
    margin: 100px auto;
    width: 600px;
    height: 500px;
    background: #fff;
    border-radius: 50px; 
    .column {
        margin-top: 20px;
        text-align: center;
    }
    .reg-input {
        box-sizing: border-box; 
        padding-left: 10px;
        height: 50px;
        width: 300px;
        border: 1px solid #000;
        border-radius: 20px; 
    }
    .btt {
        text-align: center;
    }
}
</style>