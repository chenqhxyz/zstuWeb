<script>
  export default {
    data() {
      return {
        val1: true,
        val2: true
      }
    }
  };
</script>

# 开关

## 概述

我们使用`b-switch`实现开关效果。

## 代码示例

:::demo 通过`v-model`进行双向数据绑定，打开／关闭的值分别为`true`／`false`。

```html
<b-switch v-model="val1"></b-switch>
<script>
    export default {
        data() {
            return {
                val1: true
            }
        }
    }
</script>
```
:::

:::demo `disabled`属性可禁用操作。

```html
<b-switch v-model="val2" disabled></b-switch>

<script>
    export default{
        data(){
            return {
                val2: true
            }
        }
    }
</script>
```
:::

## b-switch Props

| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 当前的开关状态 | Boolean | false |
| width  | 宽度    | Number   | 60 |
| disabled  | 是否禁用    | Boolean   | false   |
| on-icon-class  | 打开时显示的图标，设置此项会忽略 `on-text`    | String   | - |
| off-icon-class  | 关闭时显示的图标，设置此项会忽略 `off-text`    | String   | - |
| on-text  | 打开时的文字    | String   | 开 |
| off-text  | 关闭时的文字    | String   | 关 |
| on-color  | 打开时的背景色    | String   | <span style="color:#7ECC58;">#7ECC58</span> |
| off-color  | 关闭时的背景色    | String   | <span style="color:#D8DADF;">#D8DADF</span> |
| name  | 对应的`name`原生属性    | String   | - |

## b-switch Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| change | 切换开关时触发 | 当前的value |
