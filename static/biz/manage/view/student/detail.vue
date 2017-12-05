<template>
    <div>
        <div>
            班级： <el-input v-model="theClass" class="classInput"></el-input>
        </div>
        <div>
            <el-button size="small" type="primary" @click="confirm">确认</el-button>
        </div>
    </div>
</template>
<script>
import util from '../../../../util/util.js';
    export default {
        props: ['respName', 'respAccount'],
        data() {
            return {
                theClass: ''
            };
        },
        mounted() {
        },
        methods: {
           confirm() {
               util.opStudent(1, this.respAccount, this.respName, this.theClass).then((resp) => {
                   if(resp.success) {
                       window.location.reload();
                   }
               })
           }
        },
        components: {
        }
    }
</script>
               
<style lang="less">
    .classInput {
        width: 220px;
    }
</style>