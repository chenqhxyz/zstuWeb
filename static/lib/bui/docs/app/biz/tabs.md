<script>
    export default{
        data(){
            return {
                val1:'1',
                val2:'1',
                val3:'1'
            }
        }
    }
</script>

# tab切换

## 概述

我们使用`b-tabs`，`b-tab-pane`组件实现tab切换。

## 代码示例

::: demo `b-tabs`包裹`b-tab-pane`。通过`v-model`双向绑定当前激活的tab值。通过`label`定义标签名，`name`定义tab的实际值。
```html
<b-tabs v-model="val1">
    <b-tab-pane label="选项一" name="1">内容一</b-tab-pane>
    <b-tab-pane label="选项二" name="2">内容二</b-tab-pane>
    <b-tab-pane label="选项三" name="3">内容三</b-tab-pane>
    <b-tab-pane label="选项四" name="4">内容四</b-tab-pane>
</b-tabs>
<script>
    export default{
        data(){
            return {
                val1:'1'
            }
        }
    }
</script>
```
:::

::: demo `mode`设为`vertical`tab标签会垂直展示。
```html
<b-tabs v-model="val2" mode="vertical">
    <b-tab-pane label="选项一" name="1">内容一</b-tab-pane>
    <b-tab-pane label="选项二" name="2">内容二</b-tab-pane>
    <b-tab-pane label="选项三" name="3">内容三</b-tab-pane>
    <b-tab-pane label="选项四" name="4">内容四</b-tab-pane>
</b-tabs>
<script>
    export default{
        data(){
            return {
                val2:'1'
            }
        }
    }
</script>
```
:::

::: demo `type`设为`border-card`会达到卡片化的效果。
```html
<b-tabs v-model="val3" type="border-card">
    <b-tab-pane label="选项一" name="1">内容一</b-tab-pane>
    <b-tab-pane label="选项二" name="2">内容二</b-tab-pane>
    <b-tab-pane label="选项三" name="3">内容三</b-tab-pane>
    <b-tab-pane label="选项四" name="4">内容四</b-tab-pane>
</b-tabs>
<script>
    export default{
        data(){
            return {
                val3:'1'
            }
        }
    }
</script>

```
:::

## b-tabs Props

| 参数       | 说明     | 类型      | 默认值   |
|---------- |-------- |---------- |-------- |
| value  | 当前选中的tab的值，对应`b-tab-pane`的`name`属性  | String   |  第一个tab的`name` |
| mode  | 布局模式，可选值`vertical`，`horizontal`  | String   |  horizontal |
| type  | 特殊类型，可选值`border-card`（卡片化）   | String   |     -    |

## b-tabs Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| tab-click | 选中某个tab时触发 | 被选中的tab的实例 |

## b-tab-pane Props

| 参数       | 说明     | 类型      | 默认值   |
|---------- |-------- |---------- |-------- |
| label | 标题 | String | - |
| name  | 实际值，对应`b-tabs`的`value` | String | - |
