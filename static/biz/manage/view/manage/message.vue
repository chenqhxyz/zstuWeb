<template>
   <div>
        <el-input type="textarea" placeholder="输入内容"  class="content" :rows='4' v-model="content"></el-input>
        <el-button type="primary" @click="send">发 送</el-button>
    </span>
   </div>
</template>

<script>
    import util from '../../../../util/util';
    export default {
        data() {
            return {
                content: ''
            }
        },
        methods: {
            send() {
                util.sendNotice(this.content).then((resp) => {
                    this.$message({
                        message: resp.msg,
                        type: 'success'
                    });
                });
            }
        }
    }
</script>

<style lang="less">
    .content {
        width: 300px;
    }
</style>