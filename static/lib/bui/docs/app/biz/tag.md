<script>
    export default{
        data(){
            return {
                val1:true
            }
        }
    }
</script>
# 标签

## 概述

我们通过`b-tag`实现标签。

## 代码示例

:::demo `type`属性定义标签类型，启用`closeable`属性将显示关闭按钮，具体的行为可以通过监听`close`事件去实现。
```html
<b-tag style="margin-right: 10px;">标签一</b-tag>
<b-tag type="primary" style="margin-right: 10px;">标签二</b-tag>
<b-tag type="info" style="margin-right: 10px;">标签三</b-tag>
<b-tag type="success" style="margin-right: 10px;">标签四</b-tag>
<b-tag type="warning" style="margin-right: 10px;">标签五</b-tag>
<b-tag v-if="val1" type="error" closable @close="val1=false">标签六</b-tag>
<script>
    export default{
        data(){
            return {
                val1:true
            }
        }
    }
</script>
```
:::

## b-tag Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| type | 类型，可选值 `默认`，`primary`，`info`，`success`，`warning`，`error` | String  | 默认 |
| closable | 可否显示关闭按钮 | Boolean | false |

## b-tag Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| close | 关闭标签时触发 | event |
