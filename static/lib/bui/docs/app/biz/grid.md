<style lang="less">
.grid{
    &__row{
        margin-bottom:20px;
        
        &:last-child{
            margin-bottom:0;
        }
        
        .b-col:nth-child(2n){
            .grid__content{
                background: #99a9bf;
            }
        }
    }
    &__content{
        border-radius:4px;
        height:36px;
        background:#d3dce6;
    }
}
</style>

# 栅格


## 概述

我们定义了`b-row`(行)，`b-col`(列）来实现24栅格布局，将页面进行24等分，这样可以轻松应对大部分布局问题。

>栅格的使用是可选的，你完全可以使用自己更习惯的布局方式

## 代码示例

::: demo 用`b-row`包裹`b-col`再包裹内容。自由使用 `gutter`, `span`, `offset`, `push`, `pull`进行布局。
```html
<b-row class="grid__row" gutter="10">
    <b-col span="6"><div class="grid__content"></div></b-col>
    <b-col span="6"><div class="grid__content"></div></b-col>
    <b-col span="6"><div class="grid__content"></div></b-col>
    <b-col span="6"><div class="grid__content"></div></b-col>
</b-row>
<b-row class="grid__row" gutter="10">
    <b-col span="6" offset="3"><div class="grid__content"></div></b-col>
    <b-col span="6" offset="6"><div class="grid__content"></div></b-col>
</b-row>
```
:::

::: demo 参照了Bootstrap的响应式设计，预设了四个响应尺寸：`xs`(<768px), `sm`(≥768px), `md`(≥992px), `lg`(≥1200px)用来覆盖`span`的值。
```html
<b-row class="grid__row" gutter="10">
    <b-col xs="8" sm="6" md="4" lg="3"><div class="grid__content"></div></b-col>
    <b-col xs="4" sm="6" md="8" lg="9"><div class="grid__content"></div></b-col>
    <b-col xs="4" sm="6" md="8" lg="9"><div class="grid__content"></div></b-col>
    <b-col xs="8" sm="6" md="4" lg="3"><div class="grid__content"></div></b-col>
</b-row>
```
:::

## b-row Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | --- | ----- | ------ |
| gutter | 栅格间隔 | Number，String | 0 |
| type | 布局模式，可选值`flex` | String | - |

### flex布局（type：flex）

| 参数 | 说明 | 类型 | 默认值  |
| ---- | --- |----- | ------ |
| justify | 水平排列方式，可选值`star`，`end`，`center`，`space-around`，`space-between` | String | start |
| align | 垂直排列方式，可选值`top`，`middle`，`bottom`  | String | top |

## b-col Props

| 参数 | 说明 | 类型 | 默认值  |
| ---- | --- |----- | ------ |
| span | 栅格占据的列数 | String，Number | 24 |
| offset | 栅格左侧的间隔格数 | String，Number | 0 |
| push | 栅格内容向右偏移格数 | String，Number | 0 |
| pull | 栅格内容向左偏移格数 | String，Number | 0 |
| xs | `<768px` 下的响应式布局配置。配置为单个值时覆盖`span`属性；为对象`如：{span: 2, offset: 3}`时可覆盖多个属性 | String，Number，Object | - |
| sm | `≥768px` 下的响应式配置，同上 | String，Number，Object | - |
| md | `≥992px` 下的响应式配置，同上 | String，Number，Object | - |
| lg | `≥1200px` 下的响应式配置，同上 | String，Number，Object | - |
