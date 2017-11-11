<script>
    export default{
        methods:{
            alert(){
                this.$alert('这是一个重要的通知','提示');
            },
            confirm(){
                this.$confirm('你确定删除么？','提示',{
                    callback: action => {
                        if(action === 'confirm'){
                            this.$message({
                                type:'success',
                                message:'删除成功'
                            });
                        }else{
                            this.$message({
                                type:'info',
                                message:'取消删除'
                            });
                        }
                    }
                })
            },
            prompt(){
                this.$prompt('请输入邮箱','提示',{
                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: '邮箱格式不正确',
                    callback: action => {
                        if(action === 'confirm'){
                            this.$message({
                                type:'success',
                                message:'提交成功'
                            });
                        }else{
                            this.$message({
                                type:'info',
                                message:'取消提交'
                            });
                        }
                    }
                })
            }
        }
    }
</script>
# 弹窗提示

## 概述

我们实现一套模态对话框组件用来替代系统的`alert`，`confirm`，`prompt`消息提示框。

## 代码示例

当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

:::demo 调用`$alert`打开消息提示。前两个参数分别是`message`和`title`。
```html
<b-button @click="alert">alert</b-button>
<script>
    export default{
        methods:{
            alert(){
                this.$alert('这是一个重要的通知','提示');
            }
        }
    }
</script>
```
:::

:::demo 调用`$confirm`打开确认提示。前两个参数分别是`message`和`title`。`callback`作为用户操作后的回调函数。返回结果`confirm`/`cancel`分别表示确定和取消。也可使用`Promise`处理操作结果。
```html
<b-button @click="confirm">confirm</b-button>
<script>
    export default{
        methods:{
            confirm(){
                this.$confirm('你确定删除么？','提示',{
                    callback: action => {
                        if(action === 'confirm'){
                            this.$message({
                                type:'success',
                                message:'删除成功'
                            });
                        }else{
                            this.$message({
                                type:'info',
                                message:'取消删除'
                            });
                        }
                    }
                })
            }
        }
    }
</script>
```
:::

:::demo 调用`$prompt`打开输入提示。前两个参数分别是`message`和`title`。`callback`作为用户操作后的回调函数。返回结果`confirm`/`cancel`分别表示确定和取消。`inputPattern`和`inputErrorMessage`能让我们对输入的内容进行校验和错误提示，同时我们也提供更复杂的校验功能，具体请参照API。
```html
<b-button @click="prompt">prompt</b-button>
<script>
    export default{
        methods:{
            prompt(){
                this.$prompt('请输入邮箱','提示',{
                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: '邮箱格式不正确',
                    callback: action => {
                        if(action === 'confirm'){
                            this.$message({
                                type:'success',
                                message:'提交成功'
                            });
                        }else{
                            this.$message({
                                type:'info',
                                message:'取消提交'
                            });
                        }
                    }
                })
            }
        }
    }
</script>
```
:::


## 全局方法

BUI 为 Vue.prototype 添加了如下全局方法：$msgbox, $alert, $confirm 和 $prompt。因此在 vue instance 中可以采用本页面中的方式调用 `MessageBox`。

## 单独引用

单独引入 `MessageBox`：

```javascript
import { MessageBox } from '@beibei/bui';
```

对应于上述四个全局方法的调用方法依次为：MessageBox, MessageBox.alert, MessageBox.confirm 和 MessageBox.prompt。

## Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| title | 标题 | String | - |
| message | 内容 | String | - |
| isHtml | 是否以HTML的方式插入内容 | Boolean | false |
| callback | 用户操作结果处理函数，也可使用`Promise`处理操作结果。入参为操作结果`confirm`/`cancel`和实例对象 | Function(action, instance) | - |
| beforeClose | 关闭前的回调，入参为操作结果`confirm`/`cancel`，实例对象，和关闭弹窗的函数（不执行，弹窗不关闭） | Function(action, instance, done) | - |
| type | 消息类型，用于显示图标，可选值`success`，`info`，`warning`，`error` | String | - |
| customClass | 自定义弹窗类名 | String | - |
| lockScroll | 是否锁定body滚动 | Boolean | true |
| showCancelButton | 是否显示取消按钮 | Boolean | false |
| showConfirmButton | 是否显示确定按钮 | Boolean | true |
| cancelButtonText | 取消按钮的文本 | String | 取消 |
| confirmButtonText | 确定按钮的文本 | String | 确定 |
| cancelButtonClass | 取消按钮的自定义类名 | String | - |
| confirmButtonClass | 确定按钮的自定义类名 | String | - |
| closeOnClickModal | 是否可通过点击遮罩关闭弹窗 | Boolean | true |
| closeOnPressEscape | 是否可通过按下ESC键关闭弹窗 | Boolean | false |
| showInput | 是否显示输入框 | Boolean | false |
| inputValue | 输入框默认值 | String | - |
| inputPlaceholder | 输入框的提示文案 | String | - |
| inputPattern | 输入框的校验表达式 | Regexp | - |
| inputValidator | 输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串则会作为错误内容进行提示 | Function | - |
| inputErrorMessage | 校验未通过时的提示文本 | String | 输入的数据不合法! |
