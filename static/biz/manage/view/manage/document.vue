<template>
    <div>
        <el-upload class="upload-demo" action="/postdoc" :multiple="false" :on-preview="handlePreview" :file-list="fileList" :on-success="afterSuccess" :on-remove="handleRemove">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传doc/dosx文件</div>
        </el-upload>
    </div>
</template>

<script>
    import util from '../../../../util/util';
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
                util.getDocs().then((resp) => {
                    this.fileList.splice(0);
                    this.fileList = this.fileList.concat(resp.data);
                });
            },
            handleRemove(file) {
                util.deleteDoc(file.path).then((resp) => {
                     util.getDocs().then((resp) => {
                        this.fileList.splice(0);
                        this.fileList = this.fileList.concat(resp.data);
                    });
                    this.$message({
                        message: resp.msg,
                        type: 'success'
                    });
                });
            }
        },
        mounted() {
            util.getDocs().then((resp) => {
                this.fileList.splice(0);
                this.fileList = this.fileList.concat(resp.data);
            });
        }
    }
</script>

<style lang="less">
    
</style>