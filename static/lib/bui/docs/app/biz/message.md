<script>
    export default{
        methods:{
            open1(){
                this.$message({
                    type:'success',
                    message:'恭喜你，这是一条成功消息'
                });
            },
            open2(){
                this.$message({
                    type:'error',
                    message:'错了哦，这是一条错误消息'
                });
            },
            open3(){
                this.$message({
                    type:'info',
                    message:'这是一条消息'
                });
            },
            open4(){
                this.$message({
                    type:'warning',
                    message:'警告哦，这是一条警告消息'
                });
            },
            open5(){
                this.$message({
                    type:'loading',
                    message:'加载中...'
                });
            },
            open6(){
                this.$message({
                    type:'info',
                    message:'请关闭我',
                    duration:0,
                    showClose:true
                });
            }
        }
    }
</script>

# 消息提示

## 概述

我们提供了工具方法来实现消息提示功能。

## 代码示例

:::demo 默认情况下，消息从顶部出现，3秒后自动消失。通过定义不同的`type`属性，我们的支持5种消息的提示，分别是`成功`，`失败`，`消息`，`警告`，`加载中`。消息的内容通过`message`属性传入。`duration`属性设为0，消息不会自动关闭。启用`showClose`属性，会让消息尾部有个关闭按钮。
```html
<div>
    <b-button @click="open1">成功</b-button>
    <b-button @click="open2">失败</b-button>
    <b-button @click="open3">消息</b-button>
    <b-button @click="open4">警告</b-button>
    <b-button @click="open5">加载中</b-button>
    <b-button @click="open6">不自动消失</b-button>
</div>
<script>
    export default{
        methods:{
            open1(){
                this.$message({
                    type:'success',
                    message:'恭喜你，这是一条成功消息'
                });
            },
            open2(){
                this.$message({
                    type:'error',
                    message:'错了哦，这是一条错误消息'
                });
            },
            open3(){
                this.$message({
                    type:'info',
                    message:'这是一条消息'
                });
            },
            open4(){
                this.$message({
                    type:'warning',
                    message:'警告哦，这是一条警告消息'
                });
            },
            open5(){
                this.$message({
                    type:'loading',
                    message:'加载中...'
                });
            },
            open6(){
                this.$message({
                    type:'info',
                    message:'请关闭我',
                    duration:0,
                    showClose:true
                });
            }
        }
    }
</script>
```
:::

## 全局方法

BUI 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 `Message`。

## 单独引用

单独引入 `Message`：

```javascript
import { Message } from '@beibei/bui';
```

此时调用方法为 `Message(options)`。我们也为每个 type 定义了各自的方法，如 `Message.success(options)`。

## Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| type | 类型，可选值`success`，`warning`，`info`，`error`，`loading`| String | info |
| message | 消息内容 | String | - |
| isHtml |  是否把内容作为HTML插入 | Boolean | false |
| duration | 显示时间, 单位毫秒。设为`0`则不会自动关闭 | Number | 3000 |
| showClose | 是否显示关闭按钮 | Boolean | false |
| onClose | 关闭时的回调函数, 入参为实例对象 | Function | - |
| iconClass | 自定义图标 | String | - |
| customClass | 自定义类名 | String | - |

## Methods

调用 `Message` 或 `this.$message` 会返回当前 Message 的实例。

| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭消息 |
