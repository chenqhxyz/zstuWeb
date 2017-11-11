<style>
    .small-upload .b-dragger{
        width: 80px;
        height: 80px;
    }
</style>
<script>
    export default{
        data(){
            return {
                default_files:[
                    {name: '图片1.jpg', url: 'http://b1.hucdn.com/upload/show/1702/14/54524631351599_750x350.jpg'}
                ]
            }
        },
        methods:{
            beforeUpload(file) {
                 let ary = file.name.split('.'),
                 err_msg = [];
                 
                 if (file.size > 500 * 1024) {
                     err_msg.push(`${file.name}文件大于500M`);
                 }
                 if(!/jpg|png/i.test(ary[ary.length-1])){
                     err_msg.push(`${file.name}不是png/jpg的格式`);
                 }
                 
                 if(err_msg.length){
                     alert(err_msg.join('\n'));
                     return false;
                 }else{
                     return true;
                 }
             }
        }
    }
</script>

# 上传控件

## 概述

通过`b-upload`实现图片或文件的上传。

## 代码示例

::: demo 本组件不支持双向数据绑定，需要用户自己在钩子函数中处理数据。`default-file-list`属性接受初始值，格式如下`[{name:文件名,url:资源地址}]`。`action`属性定义服务端接口。在`before-upload`钩子函数中添加对文件上传前的校验。
```html
<b-upload
    action="http://jsonplaceholder.typicode.com/posts/"
    :before-upload="beforeUpload"
    :default-file-list="default_files">
    <b-button size="small" icon="upload2">点击上传</b-button>
    <div class="b-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</b-upload>
<script>
    export default{
        data(){
            return {
                default_files:[
                    {name: '图片1.jpg', url: 'http://b1.hucdn.com/upload/show/1702/14/54524631351599_750x350.jpg'}
                ]
            }
        },
        methods:{
            beforeUpload(file) {
                 let ary = file.name.split('.'),
                 err_msg = [];
                 
                 if (file.size > 500 * 1024) {
                     err_msg.push(`${file.name}文件大于500M`);
                 }
                 if(!/jpg|png/i.test(ary[ary.length-1])){
                     err_msg.push(`${file.name}不是png/jpg的格式`);
                 }
                 
                 if(err_msg.length){
                     alert(err_msg.join('\n'));
                     return false;
                 }else{
                     return true;
                 }
             }
        }
    }
</script>
```
:::

::: demo 启用`thumbnail-mode`属性实现图片预览。

```html
<b-upload
    action="http://jsonplaceholder.typicode.com/posts/"
    :before-upload="beforeUpload"
    :default-file-list="default_files"
    thumbnail-mode>
    <b-button size="small" icon="upload2">点击上传</b-button>
    <div class="b-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</b-upload>
<script>
    export default{
        data(){
            return {
                default_files:[
                    {name: '图片1.jpg', url: 'http://b1.hucdn.com/upload/show/1702/14/54524631351599_750x350.jpg'}
                ]
            }
        },
        methods:{
            beforeUpload(file) {
                 let ary = file.name.split('.'),
                 err_msg = [];
                 
                 if (file.size > 500 * 1024) {
                     err_msg.push(`${file.name}文件大于500M`);
                 }
                 if(!/jpg|png/i.test(ary[ary.length-1])){
                     err_msg.push(`${file.name}不是png/jpg的格式`);
                 }
                 
                 if(err_msg.length){
                     alert(err_msg.join('\n'));
                     return false;
                 }else{
                     return true;
                 }
             }
        }
    }
</script>
```
:::

::: demo 将`type`设为`drag`支持拖拽上传。

```html
<b-upload
    type="drag"
    action="http://jsonplaceholder.typicode.com/posts/"
    :before-upload="beforeUpload"
    :default-file-list="default_files">
    <i class="b-icon-upload"></i>
    <div class="b-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="b-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</b-upload>
<script>
    export default{
        data(){
            return {
                default_files:[
                    {name: '图片1.jpg', url: 'http://b1.hucdn.com/upload/show/1702/14/54524631351599_750x350.jpg'}
                ]
            }
        },
        methods:{
            beforeUpload(file) {
                 let ary = file.name.split('.'),
                 err_msg = [];
                 
                 if (file.size > 500 * 1024) {
                     err_msg.push(`${file.name}文件大于500M`);
                 }
                 if(!/jpg|png/i.test(ary[ary.length-1])){
                     err_msg.push(`${file.name}不是png/jpg的格式`);
                 }
                 
                 if(err_msg.length){
                     alert(err_msg.join('\n'));
                     return false;
                 }else{
                     return true;
                 }
             }
        }
    }
</script>
```
:::

::: demo `type`设为`image`将只支持单张图的上传。同时有继续上传，删除功能。

```html
<b-upload
    type="image"
    action="http://jsonplaceholder.typicode.com/posts/"
    :before-upload="beforeUpload"
    :default-file-list="default_files">
    <i class="b-icon-upload"></i>
    <div class="b-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="b-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</b-upload>
<script>
    export default{
        data(){
            return {
                default_files:[
                    {name: '图片1.jpg', url: 'http://b1.hucdn.com/upload/show/1702/14/54524631351599_750x350.jpg'}
                ]
            }
        },
        methods:{
            beforeUpload(file) {
                 let ary = file.name.split('.'),
                 err_msg = [];
                 
                 if (file.size > 500 * 1024) {
                     err_msg.push(`${file.name}文件大于500M`);
                 }
                 if(!/jpg|png/i.test(ary[ary.length-1])){
                     err_msg.push(`${file.name}不是png/jpg的格式`);
                 }
                 
                 if(err_msg.length){
                     alert(err_msg.join('\n'));
                     return false;
                 }else{
                     return true;
                 }
             }
        }
    }
</script>
```
:::

::: demo `type`设为`image-s`功能与`image`相似，但只有删除功能。一般用于较小的预览图场景。

```html
<b-upload
    class="small-upload"
    type="image-s"
    action="http://jsonplaceholder.typicode.com/posts/"
    :before-upload="beforeUpload"
    :default-file-list="default_files">
    <div style="margin-top:30px;">上传</div>
    <div class="b-upload__tip" slot="tip" style="text-align:left;">只能上传jpg/png文件，且不超过500kb</div>
</b-upload>
<style>
    .small-upload .b-dragger{
        width: 80px;
        height: 80px;
    }
</style>
<script>
    export default{
        data(){
            return {
                default_files:[
                    {name: '图片1.jpg', url: 'http://b1.hucdn.com/upload/show/1702/14/54524631351599_750x350.jpg'}
                ]
            }
        },
        methods:{
            beforeUpload(file) {
                 let ary = file.name.split('.'),
                 err_msg = [];
                 
                 if (file.size > 500 * 1024) {
                     err_msg.push(`${file.name}文件大于500M`);
                 }
                 if(!/jpg|png/i.test(ary[ary.length-1])){
                     err_msg.push(`${file.name}不是png/jpg的格式`);
                 }
                 
                 if(err_msg.length){
                     alert(err_msg.join('\n'));
                     return false;
                 }else{
                     return true;
                 }
             }
        }
    }
</script>
```
:::

## b-upload Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| default-file-list | 默认数据，格式如下`\[{name:文件名,url:资源地址}] | Array | - |
| action | 必填参数, 上传地址 | String | - |
| name | `文件上传时的字段名`，请确保该值正确 | String | file |
| data | 上传时附带的参数 | Object | - |
| headers | 上传时的请求头信息 | Object | - |
| with-credentials | 是否发送cookie凭证信息 | Boolean | false |
| type | 控件类型，可选值`select`(点击)，`drag`(拖拽)，`image`(图片)，`image-s`(小图) | String | select |
| thumbnail-mode | 是否启用预览图作为文件列表 | Boolean | false |
| accept | 可上传的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept" target="_blank">文件类型</a>（`thumbnail-mode`或`type=image/image-s`时强制要求为图片类型）| String | - |
| show-upload-list | 是否显示已上传文件列表 | Boolean | true |
| multiple | 文件是否支持多选 | Boolean | false |

## b-upload Hook Function

| 参数 | 说明 | 类型 | 默认值  |
| ---- | --- |----- | ------ |
| before-upload | 上传文件之前的钩子，返回`false`则停止上传。(支持Promise) | Function(file) | - |
| on-success | 文件上传成功时的钩子 | Function(response, file, fileList) | - |
| on-remove | 文件列表移除文件时的钩子 | Function(file, fileList) | - |
| on-error | 文件上传失败时的钩子 | Function(err, response, file) | - |
| on-preview | 点击已上传的文件链接时的钩子，可以通过`file.response`拿到服务端返回数据 | Function(file) | - |
| on-progress | 文件上传过程中的钩子 | Function(event, file, fileList) | - |


## b-upload Methods

| 方法名      | 说明          | 参数 |
|---------- |-------------- | -- |
| clearFiles | 清空当前文件列表 | - |
