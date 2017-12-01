<template>
    <div>
        <el-upload class="upload-demo" action="/postdoc" :multiple="false" :on-preview="handlePreview" :file-list="fileList" :on-success="afterSuccess">
            <el-button size="small" type="primary">点击上传</el-button>
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
                window.location.href = file.path;
            },
            afterSuccess() {
                util.getDocs().then((resp) => {
                    this.fileList.splice(0);
                    this.fileList = this.fileList.concat(resp.data);
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