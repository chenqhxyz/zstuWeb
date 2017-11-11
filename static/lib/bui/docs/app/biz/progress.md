# 进度条

## 概述

我是通过`b-progress`组件来实现进度条。

## 代码示例

:::demo `percentage`定义当前的进度。`status`定义状态，可选值`success`，`exception`。
```html
<b-progress :percentage="0" style="width: 350px;margin-bottom: 15px;"></b-progress>
<b-progress :percentage="70" style="width: 350px;margin-bottom: 15px;"></b-progress>
<b-progress :percentage="100" status="success" style="width: 350px;margin-bottom: 15px;"></b-progress>
<b-progress :percentage="50" status="exception" style="width: 350px;"></b-progress>
```
:::

:::demo `stroke-width`属性指定进度条的高度，启用`text-inside`属性讲描述信息置于进度条内部。`show-text`属性指定是否显示描述信息。
```html
<b-progress text-inside :stroke-width="18" :percentage="0" :show-text="false" style="width: 350px;margin-bottom: 15px;"></b-progress>
<b-progress text-inside :stroke-width="18" :percentage="70" style="width: 350px;margin-bottom: 15px;"></b-progress>
<b-progress text-inside :stroke-width="18" :percentage="100" status="success" style="width: 350px;margin-bottom: 15px;"></b-progress>
<b-progress text-inside :stroke-width="18" :percentage="50" status="exception" style="width: 350px;"></b-progress>
```
:::

### b-progress Props

| 参数          | 说明            | 类型            | 默认值   |
|-------------  |---------------- |---------------- |-------- |
| percentage | 百分比，可选值`0-100`   | Number          |     0    |
| status  | 状态，可选值`success`，`exception` | String | - |
| stroke-width  | 高度，单位px | Number | 6 |
| text-inside  | 描述信息是否在进度条内部 | Boolean | false |
| show-text  | 是否显示描述信息 | Boolean | true |
