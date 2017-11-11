<script>
    export default{
        methods:{
            currentChange(page){
                this.$message(`当前第${page}页`);
            }
        }
    }
</script>

# 分页

## 概述

我们使用`b-pagination`组件实现分页效果。

## 代码示例

::: demo `current-page`定义当前页码，`page-size`定义每页条数，`total`定义总条数，页数或基于上面两个值自动计算。`current-change`事件监听页码的变化。通过`layout`能定义组件的布局，具体参见API。
```html
<b-pagination :current-page="2" :page-size="20" :total="1000" @current-change="currentChange"></b-pagination>
<script>
    export default{
        methods:{
            currentChange(page){
                this.$message(`当前第${page}页`);
            }
        }
    }
</script>
```
:::

::: demo 这是小型分页效果的例子。启用`small`属性，并定义一个简单的布局。
```html
<b-pagination :page-count="20" small layout="prev, pager, next" @current-change="currentChange"></b-pagination>
<script>
    export default{
        methods:{
            currentChange(page){
                this.$message(`当前第${page}页`);
            }
        }
    }
</script>
```
:::

::: demo 这是无限分页的例子。启用`infin-page`属性，并定义一个对应的布局。
```html
<b-pagination :page-count="100" infin-page layout="infin, prev, next" @current-change="currentChange"></b-pagination>
<script>
    export default{
        methods:{
            currentChange(page){
                this.$message(`当前第${page}页`);
            }
        }
    }
</script>
```
:::

## b-pagination Props

| 参数          | 说明                  | 类型       | 默认值 |
| ------------- | -------------------- | ---------- | -------- |
| current-page | 当前页数 | Number | 1 |
| page-size | 每页显示的条目数 | Number | 10 |
| total | 总条目数 | Number | - |
| page-count | 总页数| Number | - |
| small | 是否启用小型分页 | Boolean | false |
| infin-page | 是否启用无限分页 | Boolean | false |
| layout | 布局，可组合的子元素`prev`上一页，`pager`页码信息，`next`下一页，`jumper`跳转，`total`总条数，`slot`自定义元素即`slot=default`， `->`浮动到右侧，`infin`无限分页信息 | String | prev, pager, next, jumper, ->, total  |

## b-pagination Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| current-change | 当前选中页变化时触发 | 新的选中页 |
