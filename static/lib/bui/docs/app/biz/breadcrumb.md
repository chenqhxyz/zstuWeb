# 面包屑

## 概述

当需要显示当前页面的层级结构时，可以使用`b-breadcrumb`，`b-breadcrumb-item`来实现面包屑效果。

## 示例代码

::: demo 在`b-breadcrumb`中嵌套`b-breadcrumb-item`逐级显示内容。
```html
<b-breadcrumb>
    <b-breadcrumb-item to="http://www.beibei.com">首页</b-breadcrumb-item>
    <b-breadcrumb-item to="http://www.beibei.com/category/dress">童装</b-breadcrumb-item>
    <b-breadcrumb-item>当前页</b-breadcrumb-item>
</b-breadcrumb>
```
:::

:::demo 启用`use-router`之后会使用`Vue Router`进行路由跳转。
```html
<b-breadcrumb use-router>
    <b-breadcrumb-item to="/">首页</b-breadcrumb-item>
    <b-breadcrumb-item>数据类</b-breadcrumb-item>
    <b-breadcrumb-item>面包屑</b-breadcrumb-item>
</b-breadcrumb>
```
:::

## b-breadcrumb Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| use-router | 是否启用`Vue Router` | Boolean | false |
| replace   | 跳转时地址是否替换 | Boolean | false |

## b-breadcrumb-item Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| to        | 跳转地址或路由信息 | String，Object | - |
| replace   | 跳转时地址是否替换 | Boolean | false |
