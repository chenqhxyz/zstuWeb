# 警告

## 概述

用`b-alert`组件实现页面中重要信息的提示。

## 代码示例

:::demo `type`属性可以定义4种类型`success`，`info`，`warning`，`error`，默认值为`info`。
```html
<b-alert title="成功提示！" type="success" ></b-alert>
<b-alert title="安全信息/消息提示！" type="info" style="margin-top: 10px;"></b-alert>
<b-alert title="警告提示！" type="warning" style="margin-top: 10px;"></b-alert>
<b-alert title="错误提示！" type="error" style="margin-top: 10px;"></b-alert>
```
:::

:::demo 额外定义`description`可是实现主副标题效果。
```html
<b-alert title="成功提示！" type="success" description="成功提示描述文案。"></b-alert>
<b-alert title="安全信息/消息提示！" type="info" description="消息提示描述文案。" style="margin-top: 10px;"></b-alert>
<b-alert title="警告提示！" type="warning" description="警告提示描述文案。" style="margin-top: 10px;"></b-alert>
<b-alert title="错误提示！" type="error"  description="错误提示描述文案。" style="margin-top: 10px;"></b-alert>
```
:::

:::demo 设置`show-icon`会显示不同的图标。
```html
<b-alert title="成功提示！" type="success" show-icon></b-alert>
<b-alert title="安全信息/消息提示！" type="info" show-icon style="margin-top: 10px;"></b-alert>
<b-alert title="警告提示！" type="warning" show-icon style="margin-top: 10px;"></b-alert>
<b-alert title="错误提示！" type="error" show-icon style="margin-top: 10px;"></b-alert>
```
:::

:::demo 我们允许同时存在主标题，副标题和icon。
```html
<b-alert title="成功提示！" type="success" description="成功提示描述文案。" show-icon></b-alert>
<b-alert title="安全信息/消息提示！" type="info" description="消息提示描述文案。" show-icon style="margin-top: 10px;"></b-alert>
<b-alert title="警告提示！" type="warning" description="警告提示描述文案。" show-icon style="margin-top: 10px;"></b-alert>
<b-alert title="错误提示！" type="error"  description="错误提示描述文案。" show-icon style="margin-top: 10px;"></b-alert>
```
:::
 
:::demo 通过设置`closeable`可以关闭我们的警告。支持两种方式的关闭按钮自定义。`close-text`属性可以使关闭按钮通过文本显示；`show-icon-close`设为`false`，同时使用`slot=close`的内容，则关闭按钮可以替换成任意元素。

```html
<b-alert title="警告提示！" type="warning" closable></b-alert>
<b-alert title="警告提示！" type="info" description="消息提示描述文案。" closable style="margin-top: 10px;"></b-alert>
<b-alert title="警告提示！" type="warning" show-icon closable close-text="我知道了" style="margin-top: 10px;"></b-alert>
<b-alert title="错误提示！" type="error" closable :show-icon-close=false style="margin-top: 10px;"><a href="http://www.beibei.com" target="_blank" slot="close">立即进入</a></b-alert>
```
:::

## b-alert Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| type | 类型，可选值`success`，`warning`，`info`，`error` | String | info |
| title | 必填项，标题 | String | - |
| description | 辅助性文字。也可通过`slot=default`传入 | String | - |
| show-icon | 是否显示图标 | Boolean | — | false |
| closable | 是否可关闭 | Boolean | false |
| close-text | 关闭按钮自定义文本 | String | — |
| show-icon-close | 是否显示关闭按钮图标 | Boolean | true |


## b-alert Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| close | 关闭是触发 | - |
