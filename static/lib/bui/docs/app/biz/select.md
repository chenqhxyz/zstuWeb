<script>
    export default{
        data(){
            return {
                val1:'1',
                val2:'',
                val3:'',
                val4:'1'
            }
        }
    }
</script>

# 选择器

## 概况

我们用`b-select`和`b-option`来实现下拉选择器效果。

## 代码示例

::: demo 在`b-select`中内嵌`b-option`，用`v-model`进行双向数据绑定。`value`和`label`分别表示选项的实际值和显示值。使用`clearable`属性可以允许用户清空当前选择值，使组件的值为空字符串。`width`属性控制下拉框的宽度。
```html
<b-select v-model="val1" clearable :width="150">
    <b-option label="男" value="1"></b-option>
    <b-option label="女" value="2"></b-option>
</b-select>
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

::: demo `disabled`属性可以禁用整个`b-select`，也可以单独禁用`b-option`。
```html
<b-select v-model="val2" disabled>
    <b-option label="男" value="1"></b-option>
    <b-option label="女" value="2"></b-option>
</b-select>
<div style="margin-top: 15px;">
    <b-select v-model="val3">
        <b-option label="男" value="1"></b-option>
        <b-option label="女" value="2" disabled></b-option>
    </b-select>
</div>
<script>
    export default{
        data(){
            return {
                val2:'',
                val3:''
            }
        }
    }
</script>
```
:::

::: demo 可以在b-option标签内自定义选项显示内容，为空则显示`label`属性。
```html
<b-select v-model="val4">
    <b-option value="1" label="红色">
        <span style="color: #FF0000">红色</span>
    </b-option>
    <b-option value="2" label="绿色" >
        <span style="color: #00FF00">绿色</span>
    </b-option>
    <b-option value="3"label="蓝色" >
        <span style="color: #0000FF">蓝色</span>
    </b-option>
</b-select>
<script>
    export default{
        data(){
            return {
                val4:'1'
            }
        }
    }
</script>
```
:::

## b-select Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| value | 当前的值 | String，Number| - |
| width     | 宽度 | String,Number         | - |
| clearable | 是否可以清空当前选中值 | Boolean | false |
| disabled | 是否禁用 | Boolean | false |
| placeholder | 占位符 | String | 请选择 |
| size    | 大小尺寸，可选值`short`，`long`，`longer`，`fit`，同`b-input`| String | - |
| popper-class | 自定义下拉框体的类名 | String | - |
| name | 原生`name`属性 | String | - |

## b-select Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| change | 选中值发送变化时触发 | 当前选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现/隐藏分别为`true`/`false` |

## b-option Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| value | 实际值 | String，Number | - |
| label | 显示值，不填则与`value`属性相同 | String，Number | - |
| disabled | 是否禁用 | Boolean | false |
