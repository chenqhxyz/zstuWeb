<script>
  export default {
    methods: {
      handleClick() {
        alert('点击按钮');
      }
    }
  }
</script>

# 按钮

## 概述

我们定义了`b-button`来实现最常见的按钮功能。

## 代码示例

::: demo `type`属性定义按钮的样式。`width`属性定义按钮宽度。`click`绑定按钮点击事件。
```html
<b-button type="primary" @click="handleClick" :width="120">主按钮</b-button>
<b-button @click="handleClick" :width="100">次按钮</b-button>
<b-button type="ghost" @click="handleClick" :width="100">幽灵按钮</b-button>
```
:::

::: demo `disabled`属性能够使按钮不可点击。
```html
<b-button type="primary" @click="handleClick" disabled>主按钮</b-button>
<b-button @click="handleClick" disabled>次按钮</b-button>
<b-button type="ghost" @click="handleClick" disabled >幽灵按钮</b-button>
```
:::

:::demo `icon`属性定义左侧图标，`icon-right`属性定义右侧图标。

```html
<b-button type="primary" icon="upload2">左图按钮</b-button>
<b-button type="primary" icon-right="arrow-right">右图按钮</b-button>
```
:::

:::demo `size`属性定义按钮的尺寸。

```html
<b-button type="primary" size="large">大尺寸</b-button>
<b-button type="primary">默认尺寸</b-button>
<b-button type="primary" size="small">小尺寸</b-button>
```
:::

::: demo `loading`属性使按钮进入加载中状态，并且不可点击。在异步操作中会非常有用。
```html
<b-button type="primary" @click="handleClick" loading>加载中...</b-button>

```
:::

## b-button Props

| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 样式，可选值 空，`primary`，`ghost` | String | 空 |
| width    | 按钮宽度，不需要可不填 | String,Number | - |
| disabled  | 是否禁用   | Boolean | false |
| loading | 是否处于加载中 | Boolean | false |
| icon | 左侧图标名称 | String |  —  |
| icon-right | 右侧图标名称 | String |  —  |
| size | 尺寸，可选值 空，`large`，`small` | String | 空 |

## b-button Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| click | 点击事件 | event |



