<script>
    export default{
        data(){
            return {
                val1:'',
                val2:[],
                val3:''
            }
        }
    }
</script>
# 时间选择器

## 概述

我们通过`b-time-picker`组件来实现任意时间点的选择，通过`b-time-select`实现多个固定时间点的选择。
 
## 代码示例

::: demo 任意时间点的选择使用`b-time-picker`组件，定义`picker-options`的`selectableRange`属性，如`18:30:00 - 20:30:00`限制可选时间范围。
```html
<b-time-picker v-model="val1" placeholder="任意时间点"
    :picker-options="{
      selectableRange: '9:30:00 - 20:30:00'
    }">      
</b-time-picker>
<script>
    export default{
        data(){
            return {
                val1:''
            }
        }
    }
</script>
```
:::

::: demo `b-time-picker`组件启用`is-range`属性，即可实现时间范围选择。
```html
<b-time-picker v-model="val2" placeholder="选择时间范围" is-range></b-time-picker>
<script>
    export default{
        data(){
            return {
                val2:[]
                
            }
        }
    }
</script>
```
:::

::: demo 固定时间点的选择使用`b-time-select`组件，定义`picker-option`的`star`，`end`，`step`分别指定起始时间，结束时间，步长。
```html
<b-time-select v-model="val3" placeholder="选择时间"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }">
</b-time-select>
<script>
    export default{
        data(){
            return {
                val3:''
            }
        }
    }
</script>
```
:::

## b-time-picker Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| value | 当前的值 | Date，\[Date,Date] | - |
| is-range | 是否启用范围选择 | Boolean | false |
| picker-options | 额外配置项，具体属性见下表 | Object | - |
| placeholder | 默认文案 | String | - |
| clearable | 是否显示清空按钮 | Boolean | true |
| disabled | 是否禁用 | Boolean | false |
| editable | 可否直接在文本框编辑内容 | Boolean | true |
| readonly | 是否只读 | Boolean | false |
| size     | 文本框尺寸，可选值`short`，`long`，`longer`，`fit`，同`b-input` | String | - |
| align | 弹出层对齐方式，可选值`left`，`center`，`right` | String | left |
| popper-class | 自定义弹出层类名 | String | - |

### picker-options(b-time-picker) Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| selectableRange | 可选时间段，如`18:30:00 - 20:30:00`，`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | String，Array | - |
| format | 时间格式化，时`HH`，分`mm`，秒`ss` | String | HH:mm:ss |

## b-time-select Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| value | 当前的值 | String | - |
| picker-options | 额外配置项，具体属性见下表 | Object | - |
| placeholder | 默认文案 | String | - |
| clearable | 是否显示清空按钮 | Boolean | true |
| disabled | 是否禁用 | Boolean | false |
| editable | 可否直接在文本框编辑内容 | Boolean | true |
| readonly | 是否只读 | Boolean | false |
| size     | 文本框尺寸，可选值`short`，`long`，`longer`，`fit`，同`b-input` | String | - |
| align | 弹出层对齐方式，可选值`left`，`center`，`right` | String | left |
| popper-class | 自定义弹出层类名 | String | - |

### picker-options(b-time-select) Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| start | 开始时间 | String | 09:00 |
| end | 结束时间 | String | 18:00 |
| step | 时间间隔 | String | 00:30 |
| minTime | 最小时间，小于该时间的时间段将被禁用 | String | 00:00 |
| maxTime | 最大时间，大于该时间的时间段将被禁用 | String | - |

## b-time-picker/b-time-select Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| change | 当前的值发生变化时触发 | 格式化后的值 |
