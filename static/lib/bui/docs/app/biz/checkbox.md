<script>
    export default {
        data () {
            return {
                val1: ['1'],
                val2: '1',
                val3: ['1'],
                val4: ['1'],
                val5: false,
                val6: ['1'],
                val7: ['1']
            }
        },
        watch: {
            val6(val){
                if(val.length >= 3 && !this.val5){
                    this.val5 = true;
                }else if(val.length < 3 && this.val5){
                    this.val5 = false;
                }
            }
        },
        methods:{
            handleChangeAll(val){
                this.val6 = val?['1','2','3']:[];
            }
        }
    }
</script>

# 多选框

## 概述

我们使用`b-checkbox-group`，`b-checkbox`来实现多选功能。

## 代码示例

::: demo `b-checkbox-group`包裹`b-checkbox`。通过`v-model`进行双向数据绑定。为空的时候返回空数组。
```html
<b-checkbox-group v-model="val1">
    <b-checkbox label="1">选项一</b-checkbox>
    <b-checkbox label="2">选项二</b-checkbox>
    <b-checkbox label="3">选项三</b-checkbox>
</b-checkbox-group>
<script>
    export default{
        data(){
            return {
                val1:['1']
            }
        }
    }
</script>
```
:::

::: demo `mode`属性的使用同单选框，设为`vertical`达到垂直布局效果。
```html
<b-checkbox-group v-model="val7" mode="vertical">
    <b-checkbox label="1">选项一</b-checkbox>
    <b-checkbox label="2">选项二</b-checkbox>
    <b-checkbox label="3">选项三</b-checkbox>
</b-checkbox-group>
<script>
    export default{
        data(){
            return {
                val7:['1']
            }
        }
    }
</script>
```
:::

::: demo `b-checkbox`也能单独使用，并且通过`v-model`进行双向数据绑定。勾选非勾选返回`true`／`false`。
```html
<b-checkbox v-model="val2" label="1">选项一</b-checkbox>
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

::: demo `disabled`的使用同单选框一样也支持单个和整组。
```html
<b-checkbox-group v-model="val3" disabled>
    <b-checkbox label="1">选项一</b-checkbox>
    <b-checkbox label="2">选项二</b-checkbox>
    <b-checkbox label="3">选项三</b-checkbox>
</b-checkbox-group>
<div style="margin-top: 15px;">
    <b-checkbox-group v-model="val4">
        <b-checkbox label="1">选项一</b-checkbox>
        <b-checkbox label="2" disabled>选项二</b-checkbox>
        <b-checkbox label="3">选项三</b-checkbox>
    </b-checkbox-group>
</div>
<script>
    export default{
        data(){
            return {
                val3:['1'], 
                val4:['2']
            }
        }
    }
</script>
```
:::

::: demo 实现全选功能，我们可以使用`indeterminate`来表示中间状态效果
```html
<b-checkbox v-model="val5" :indeterminate="!val5 && val6.length > 0" label="1" @change="handleChangeAll">全选 |</b-checkbox>
<b-checkbox-group v-model="val6" style="margin-left: 10px;">
    <b-checkbox label="1">选项一</b-checkbox>
    <b-checkbox label="2">选项二</b-checkbox>
    <b-checkbox label="3">选项三</b-checkbox>
</b-checkbox-group>
<script>
    export default{
        data(){
            return {
                val5:false,
                val6:['1']
            }
        },
        watch: {
            val6(val){
                if(val.length >= 3 && !this.val5){
                    this.val5 = true;
                }else if(val.length < 3 && this.val5){
                    this.val5 = false;
                }
            }
        },
        methods:{
            handleChangeAll(val){
                this.val6 = val?['1','2','3']:[];
            }
        }
    }
</script>
```
:::

## b-checkbox-group Props

| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------- |
| value | 当前勾选的值，值和选项的`label`对应，未选中任何一项返回空数组| Array | - |
| mode     | 布局方式，可选值 空，`vertical`   | String | 空 |
| disabled  | 是否禁用    | Boolean   | false   |

## b-checkbox-group Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| change | 任意勾选项变化时 | 当前的value |

## b-checkbox Props

| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------- |
| value | 当前选项是否勾选 | Boolean | - |
| label     | 选中时的值   | String,Number    |  - |
| disabled  | 是否禁用    | Boolean   | — | false   |
| indeterminate | 否处于不确定状态 | Boolean    |     false    |
| empty | 是否只展示勾选框 | Boolean    |     false    |
| name | 原生`name`属性 | String    |     —    |

## b-checkbox Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| change | 任意勾选项变化时 | 是否选中 |
