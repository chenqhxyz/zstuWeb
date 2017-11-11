<script>
    export default {
        data () {
            return {
                val1: '1',
                val2: '1',
                val3: '1',
                val4: '1',
                val5: '1',
                val6: '1',
            }
        }
    }
</script>

# 单选框

## 概述

我们使用`b-radio-group`，`b-radio`或`b-radio-button`来实现数据单选功能。

## 代码示例

:::demo 用`b-radio-group`的`v-model`进行双向数据绑定，用`b-radio`来定义选项，其中`label`属性为选中值。启用`clearable`后可以不勾选任何一项。
```html
<b-radio-group v-model="val1" clearable>
  <b-radio label="1">选项一</b-radio>
  <b-radio label="2">选项二</b-radio>
  <b-radio label="3">选项三</b-radio>
</b-radio-group>
<script>
    export default {
        data(){
            return {
              val1:'1'
            };
        }
    }
</script>
```
:::

:::demo 内嵌`b-radio`时，`mode`设为`vertical`支持纵向布局。
```html
<b-radio-group v-model="val2" mode="vertical">
  <b-radio label="1">选项一</b-radio>
  <b-radio label="2">选项二</b-radio>
  <b-radio label="3">选项三</b-radio>
</b-radio-group>
<script>
    export default {
        data(){
            return {
                val2:'1'
            };
        }
    }
</script>
```
:::

::: demo `disabled`属性既可以禁用单个选项，也可以禁用整组选项。
```html
<b-radio-group v-model="val3" disabled>
  <b-radio label="1">选项一</b-radio>
  <b-radio label="2">选项二</b-radio>
  <b-radio label="3">选项三</b-radio>
</b-radio-group>
<div style="margin-top:15px;">
    <b-radio-group v-model="val4">
      <b-radio label="1">选项一</b-radio>
      <b-radio label="2" disabled>选项二</b-radio>
      <b-radio label="3">选项三</b-radio>
    </b-radio-group>
</div>
<script>
    export default{
        data(){
            return {
                val3:'1',
                val4:'1'
            }
        }
    }
</script>
```
:::

::: demo `b-radio-button`替换`b-radio`可以达到单选按钮组效果。`size`属性和`b-button`一样，控制按钮大小；`light`属性控制按钮的颜色。
```html
<b-radio-group v-model="val5">
  <b-radio-button label="1">选项一</b-radio-button>
  <b-radio-button label="2">选项二</b-radio-button>
  <b-radio-button label="3">选项三</b-radio-button>
</b-radio-group>
<div style="margin-top:15px">
    <b-radio-group v-model="val6" light size="small">
      <b-radio-button label="1">选项一</b-radio-button>
      <b-radio-button label="2">选项二</b-radio-button>
      <b-radio-button label="3">选项三</b-radio-button>
    </b-radio-group>
</div>
<script>
    export default{
        data(){
            return {
                val5:'1',
                val6:'1'
            }
        }
    }
</script>
```
:::

## b-radio-group Props

| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------- |
| value | 当前选中的值，对应项的`label`值，未选中任何一项为空字符串 | String，Number | |
| disabled  | 禁用    | Boolean   | false   |
| clearable  | 启用取消选中   | Boolean   | false   |
| mode     | 布局方式(仅`b-radio`有效)，可选值 空，`horizontal`   | String  | 空  |

### 按钮组
| 参数 | 说明 | 类型 | 默认值  |
| ---- | --- |----- | ------ |
| light | 启用白底按钮 | Boolean    |     false    |
| size  | 按钮大小，同`b-button`，可选值 空，`large`,`small`    | String   | 空  |

## b-radio-group Events
 
| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
|change | 选中值改变 | 当前选中的值 |

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发 |  选中的 Radio label 值  |

## b-radio／b-radio-button Props

| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------- |
| label     | 选中时的值，必填   | String,Number    |   -  |
| disabled  | 是否禁用    | Boolean   | false   |
| name | 原生`name`属性 | String    |     -    |



