<script>
    export default{
        data(){
            return {
                val1:false,
                val2:false
            }
        }
    }
</script>

# 对话框

## 概述

使用`b-dialog`组件实现对话框。

# 代码示例

:::demo 通过`v-model`双向绑定当前弹窗的显示状态。启用`show-close`会显示关闭按钮。
```html
<b-button @click="val1 = true">弹出对话框</b-button>
<b-dialog title="弹窗标题" v-model="val1" show-close>
    <span>内容描述</span>
    <span slot="footer" class="dialog-footer">
        <b-button type="ghost" @click="val1 = false">取 消</b-button>
        <b-button type="primary" @click="val1 = false">确 定</b-button>
    </span>
</b-dialog>
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

:::demo `type`设为`slide`即可实现右侧滑入效果，此时不需要设置`title`。
```html
<b-button @click="val2 = true">右侧滑入对话框</b-button>
<b-dialog v-model="val2" show-close type="slide">
   <span>内容描述</span>
</b-dialog>
<script>
   export default{
       data(){
           return {
               val2:false
           }
       }
   }
</script>
```
:::

## b-dialog Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| title     | 标题，也可通过`slot`传入 | String    | - |
| size      | 大小，可选值`tiny`，`small`，`large`，`full` | String    | small |
| type      | 显示方式，可选值`fade`（弹出），`slide`（右侧滑入） | String    | fade |
| show-close | 是否显示关闭按钮 | Boolean    | false |
| lock-scroll | 是否锁定body的滚动 | Boolean | true |
| modal     | 是否需要遮罩层   | Boolean   | true |
| modal-append-to-body | 遮罩层是否插入至body元素，若为`false`则会插入至父元素 | Boolean | true |
| close-on-click-modal | 是否可以通过点击遮罩层关闭弹窗 | Boolean    | true |
| close-on-press-escape | 是否可以通过按下ESC按钮关闭弹窗 | Boolean  | true |
| custom-class      | 弹窗的自定义类名 | String    | - |

## b-dialog Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| close  | 关闭时触发 | - |
| open  | 打开时触发 | - |

## b-dialog Slot

| name | 说明 |
|------|--------|
| default | 内容区域 |
| title | 顶部标题区域 |
| footer | 底部按钮区域 |

## b-dialog Methods

| 方法名 | 说明 |
|------|--------|
| open | 打开弹窗 |
| close | 关闭弹窗 |
