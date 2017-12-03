<template>
    <div>
        <el-upload class="upload-demo" action="/exp" :multiple="false" :on-preview="handlePreview" :file-list="fileList" :on-success="afterSuccess" :on-remove="handleRemove">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传doc/dosx文件</div>
        </el-upload>
    </div>
</template>

<script>
import util from '../../../../util/util.js';
    export default {
        data() {
            return {
                fileList: []
            };
        },
        methods: {
            handlePreview(file) {
                window.location.href = file.url;
            },
            afterSuccess() {
               this.getInfs();
            },
            handleRemove(file) {
                util.getExps(1, file.path).then((resp) => {
                    this.getInfs();
                    this.$message({
                        message: resp.msg,
                        type: 'success'
                    });
                })
            },
            getInfs() {
                util.getExps(0).then((resp) => {
                    this.fileList.splice(0);
                    this.fileList = this.fileList.concat(resp.data);
                });
            }
        },
        mounted() {
            this.getInfs();
        }
    }
</script>

<style lang="less">
    
</style>