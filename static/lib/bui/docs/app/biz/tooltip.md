<script>
    export default{
        data(){
            return {
                val1:false
            }
        }
    }
</script>

# 气泡

## 概述

使用`b-tooltip`组件包裹元素后，元素周边就可以按需出现一个类似气泡的卡片浮层。

## 代码示例

:::demo 用`b-tooltip`包裹元素，通过`placement`属性可以定义气泡出现的方向，我们支持（上左，上边，上右，左上，左边，左下，右上,右边，右下，下左，下边，下右)十二个方向。具体可以查看API。气泡默认在鼠标移入/移出的时候显示/隐藏。提示的内容可以通过`content`属性传入。
```html
<div style="padding-left: 82px;">
    <b-tooltip placement="top-start" content="任意提示内容">
        <b-button>上左</b-button>
    </b-tooltip>    
    <b-tooltip placement="top" content="任意提示内容">
        <b-button>上边</b-button>
    </b-tooltip>   
    <b-tooltip placement="top-end" content="任意提示内容">
        <b-button>上右</b-button>
    </b-tooltip>
</div>
<div style="overflow: hidden;">
    <div style="float: left;width: 72px;">
            <b-tooltip placement="left-start" content="任意提示内容">
                <b-button style="margin: 20px 0 0 0;">左上</b-button>
            </b-tooltip>    
            <b-tooltip placement="left" content="任意提示内容">
                <b-button style="margin: 20px 0 0 0;">左边</b-button>
            </b-tooltip>   
            <b-tooltip placement="left-end" content="任意提示内容">
                <b-button style="margin: 20px 0;">左下</b-button>
            </b-tooltip>
    </div>
    <div style="float: left;width: 72px;margin-left: 256px;">
        <b-tooltip placement="right-start" content="任意提示内容">
            <b-button style="margin: 20px 0 0 0;">右上</b-button>
        </b-tooltip>    
        <b-tooltip placement="right" content="任意提示内容">
            <b-button style="margin: 20px 0 0 0;">右边</b-button>
        </b-tooltip>   
        <b-tooltip placement="right-end" content="任意提示内容">
            <b-button style="margin: 20px 0;">右下</b-button>
        </b-tooltip>
    </div>
</div>
<div style="padding-left: 82px">
    <b-tooltip placement="bottom-start" content="任意提示内容">
        <b-button>下左</b-button>
    </b-tooltip>    
    <b-tooltip placement="bottom" content="任意提示内容">
        <b-button>下边</b-button>
    </b-tooltip>   
    <b-tooltip placement="bottom-end" content="任意提示内容">
        <b-button>下右</b-button>
    </b-tooltip>
</div>
```
:::

## 自定义Tooltip的内容

展示多行文本或者是其他的自定义内容

:::demo 同时使用`v-model`和`manual`可以达到主动控制的效果。提示的内容可以通过`slot=content`达到自定义效果。
```html
<b-tooltip v-model="val1" manual placement="right">
    <div slot="content">
        <img src="http://b2.hucdn.com//upload/hmp/1701/05/84279117817313_270x270.jpg">
    </div>
    <b-button @click="val1=!val1">查看图片</b-button>
</b-tooltip>
<script>
    export default{
        data(){
            return {
                val1:false
            }
        }
    }
</script>
```
:::

## b-tooltip Props

| 参数               | 说明                                                     | 类型              | 默认值 |
| -------------------- | ----------------------------------------------------------|------------------- | -------- |
| value |  当前的可见状态  | Boolean   | false |
| placement        |  出现位置 可选值，`top`，`top-start`，`top-end`，`bottom`，`bottom-start`，`bottom-end`，`left`，`left-start`，`left-end`，`right`，`right-start`，`right-end` | String |  bottom-start |
| content     |  显示的内容，也可以通过`slot=content`传入  | String  | - |
| manual | 是否启用手动控制，设置为`true`后，`mouseenter`和`mouseleave`事件将失效 | Boolean | false |
| offset |  出现位置的偏移量  | Number |  0 |
| openDelay | 延迟出现时间，单位毫秒 | Number | 0 |
| disabled | 是否禁用 | Boolean | false |
| visible-arrow   |  是否显示箭头 | Boolean | true |
| transition     | 自定义渐变动画 | String | fade-in-linear |
| popper-class | 自定义弹出浮层类名 | String | - |
