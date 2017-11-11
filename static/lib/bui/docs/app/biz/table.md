<script>
    export default{
        data(){
            return {
                data:[
                    {
                      date: '2016-05-01',
                      name: '张三',
                      province: '浙江省',
                      city: '杭州市',
                      address: '江干区九堡'
                    },
                    {
                      date: '2016-05-02',
                      name: '李四',
                      province: '浙江省',
                      city: '杭州市',
                      address: '江干区七堡'
                    },
                    {
                      date: '2016-05-03',
                      name: '熊大',
                      province: '浙江省',
                      city: '杭州市',
                      address: '西湖区翠园'
                    },
                    {
                      date: '2016-05-04',
                      name: '熊二',
                      province: '浙江省',
                      city: '杭州市',
                      address: '西湖区古荡'
                    },
                    {
                      date: '2016-05-05',
                      name: '光头强',
                      province: '浙江省',
                      city: '杭州市',
                      address: '拱墅区申花'
                    },
                    {
                      date: '2016-05-06',
                      name: '贝贝',
                      province: '浙江省',
                      city: '杭州市',
                      address: '西湖区灵隐'
                    }
                ]
            }
        },
        methods:{
            getRowKey(row){
                return row.name;
            },
            currentChange(row){
                this.$message(`当前选中${row.name}`);
            },            
            selectionChange(selection){
                this.$message(`当前选中：${selection.map(val => val.name).join('，')}`);
            }
        }
    }
</script>

# 表格

## 概述

通过`b-table`和`b-table-column`能实现很多我们常见的表格功能。

## 代码示例

::: demo 本例时最简单的用法。为`b-table`定义`data`属性，传入的是`\[Object]`。通过`b-table-column`定义每一列内容，`label`表示标题，`prop`表示将显示该属性名的数据。我们还可以通过`width`/`min-width`定义列宽。为`b-table`定义`height`后，内容过多时，表格内部会出现一个滚动条。
```html
<b-table :data="data" :height="185" style="width:600px;">
    <b-table-column label="日期" prop="date" :width="180"></b-table-column>
    <b-table-column label="姓名" prop="name" :width="180"></b-table-column>
    <b-table-column label="地址" prop="address" :min-width="200"></b-table-column>
</b-table>
<script>
    export default{
        data(){
            return {
                data:[
                    {
                        date: '2016-05-01',
                        name: '张三',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区九堡'
                    },
                    {
                        date: '2016-05-02',
                        name: '李四',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区七堡'
                    },
                    {
                        date: '2016-05-03',
                        name: '熊大',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区翠园'
                    },
                    {
                        date: '2016-05-04',
                        name: '熊二',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区古荡'
                    },
                    {   
                        date: '2016-05-05',
                        name: '光头强',
                        province: '浙江省',
                        city: '杭州市',
                        address: '拱墅区申花'
                    },
                    {
                        date: '2016-05-06',
                        name: '贝贝',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区灵隐'
                    }
                ]
            }
        }
    }
</script>
```
:::

:::demo 这是一个多级表头的例子，我们只要通过`b-table-column`的相互嵌套就可以实现。启用`border`能让列与列之间有边框。
```html
<b-table :data="data" style="width:700px;" border>
    <b-table-column label="日期" prop="date" :width="180"></b-table-column>
    <b-table-column label="配送信息">
        <b-table-column label="姓名" prop="name" :width="100"></b-table-column>
        <b-table-column label="地址">
            <b-table-column label="省份" prop="province" :width="100"></b-table-column>
            <b-table-column label="城市" prop="city" :width="100"></b-table-column>
            <b-table-column label="详细地址" prop="address" :min-width="200"></b-table-column>
        </b-table-column>
    </b-table-column>
</b-table>
<script>
    export default{
        data(){
            return {
                data:[
                    {
                        date: '2016-05-01',
                        name: '张三',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区九堡'
                    },
                    {
                        date: '2016-05-02',
                        name: '李四',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区七堡'
                    },
                    {
                        date: '2016-05-03',
                        name: '熊大',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区翠园'
                    },
                    {
                        date: '2016-05-04',
                        name: '熊二',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区古荡'
                    },
                    {   
                        date: '2016-05-05',
                        name: '光头强',
                        province: '浙江省',
                        city: '杭州市',
                        address: '拱墅区申花'
                    },
                    {
                        date: '2016-05-06',
                        name: '贝贝',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区灵隐'
                    }
                ]
            }
        }
    }
</script>
```
:::

:::demo 这是一个固定列的例子，`b-table-column`启用`fixed`属性，可选值时`left` ，`right`不填默认为左边。
```html
<b-table :data="data" style="width:500px;" border>
    <b-table-column label="日期" prop="date" :width="130" fixed="left"></b-table-column>
    <b-table-column label="姓名" prop="name" :width="100"></b-table-column>
    <b-table-column label="省份" prop="province" :width="100"></b-table-column>
    <b-table-column label="城市" prop="city" :width="100"></b-table-column>
    <b-table-column label="详细地址" prop="address" :min-width="200"></b-table-column>
</b-table>
<script>
    export default{
        data(){
            return {
                data:[
                    {
                        date: '2016-05-01',
                        name: '张三',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区九堡'
                    },
                    {
                        date: '2016-05-02',
                        name: '李四',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区七堡'
                    },
                    {
                        date: '2016-05-03',
                        name: '熊大',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区翠园'
                    },
                    {
                        date: '2016-05-04',
                        name: '熊二',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区古荡'
                    },
                    {   
                        date: '2016-05-05',
                        name: '光头强',
                        province: '浙江省',
                        city: '杭州市',
                        address: '拱墅区申花'
                    },
                    {
                        date: '2016-05-06',
                        name: '贝贝',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区灵隐'
                    }
                ]
            }
        }
    }
</script>
```
:::

:::demo 单选某一行的例子。启用`highlight-current-row`才会高亮显示选中行，通过`row-key`为每一行定义一个唯一`key`，`current-row-key`用来定义默认选中的行。`current-change`用来监听当前选中行的变化。把`b-table-column`的`type`设为`index`该列会显示行的序号。
```html
<b-table :data="data" style="width:600px;" current-row-key="李四" :row-key="getRowKey" highlight-current-row @current-change="currentChange">
    <b-table-column type="index" :width="50"></b-table-column>
    <b-table-column label="日期" prop="date" :width="130"></b-table-column>
    <b-table-column label="姓名" prop="name" :width="180"></b-table-column>
    <b-table-column label="地址" prop="address" :min-width="200"></b-table-column>
</b-table>
<script>
    export default{
        data(){
            return {
                data:[
                    {
                        date: '2016-05-01',
                        name: '张三',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区九堡'
                    },
                    {
                        date: '2016-05-02',
                        name: '李四',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区七堡'
                    },
                    {
                        date: '2016-05-03',
                        name: '熊大',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区翠园'
                    },
                    {
                        date: '2016-05-04',
                        name: '熊二',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区古荡'
                    },
                    {   
                        date: '2016-05-05',
                        name: '光头强',
                        province: '浙江省',
                        city: '杭州市',
                        address: '拱墅区申花'
                    },
                    {
                        date: '2016-05-06',
                        name: '贝贝',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区灵隐'
                    }
                ]
            }
        },
        methods:{
            getRowKey(row){
                return row.name;
            },
            currentChange(row){
                this.$message(`当前选中${row.name}`);
            }
        }
    }
</script>
```
:::

:::demo 多选的例子。多选不支持初始化选中。添加一个`type`为`selection`的列，通过`selection-change`事件监听勾选的变化。
```html
<b-table :data="data" style="width:600px;" @selection-change="selectionChange">
    <b-table-column type="selection" :width="55"></b-table-column>
    <b-table-column label="日期" prop="date" :width="130"></b-table-column>
    <b-table-column label="姓名" prop="name" :width="180"></b-table-column>
    <b-table-column label="地址" prop="address" :min-width="200"></b-table-column>
</b-table>
<script>
    export default{
        data(){
            return {
                data:[
                    {
                        date: '2016-05-01',
                        name: '张三',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区九堡'
                    },
                    {
                        date: '2016-05-02',
                        name: '李四',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区七堡'
                    },
                    {
                        date: '2016-05-03',
                        name: '熊大',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区翠园'
                    },
                    {
                        date: '2016-05-04',
                        name: '熊二',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区古荡'
                    },
                    {   
                        date: '2016-05-05',
                        name: '光头强',
                        province: '浙江省',
                        city: '杭州市',
                        address: '拱墅区申花'
                    },
                    {
                        date: '2016-05-06',
                        name: '贝贝',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区灵隐'
                    }
                ]
            }
        },
        methods:{
            selectionChange(selection){
                this.$message(`当前选中：${selection.map(val => val.name).join('，')}`);
            }
        }
    }
</script>
```
:::

:::demo 排序的例子。`b-table-column`添加`sortable`后该列支持排序。`default-sort`定义初始化排序的列,其中`prop`指定被排序的属性，`order`指定排序的规则，可选值`ascending`，`descending`。排序规则可以参见API中的`sort-method`。
```html
<b-table :data="data" style="width:600px;" :default-sort="{prop:'date',order:'descending'}">
    <b-table-column label="日期" prop="date" :width="180" sortable></b-table-column>
    <b-table-column label="姓名" prop="name" :width="180"></b-table-column>
    <b-table-column label="地址" prop="address" :min-width="200"></b-table-column>
</b-table>
<script>
    export default{
        data(){
            return {
                data:[
                    {
                        date: '2016-05-01',
                        name: '张三',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区九堡'
                    },
                    {
                        date: '2016-05-02',
                        name: '李四',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区七堡'
                    },
                    {
                        date: '2016-05-03',
                        name: '熊大',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区翠园'
                    },
                    {
                        date: '2016-05-04',
                        name: '熊二',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区古荡'
                    },
                    {   
                        date: '2016-05-05',
                        name: '光头强',
                        province: '浙江省',
                        city: '杭州市',
                        address: '拱墅区申花'
                    },
                    {
                        date: '2016-05-06',
                        name: '贝贝',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区灵隐'
                    }
                ]
            }
        }
    }
</script>
```
:::

:::demo 自定义内容的例子。每个单元格的内容是可以任意定义的。为了获取当前行等一些数据我们可以使用`Scoped-Slots`，从中获取`row`，`column`，`$index`，`store`（table 内部的状态管理）这些数据，用法参考[Scoped-Slots](https://vuejs.org/v2/guide/components.html#Scoped-Slots)。
```html
<b-table :data="data" style="width:600px;">
    <b-table-column label="日期" prop="date" :width="180"></b-table-column>
    <b-table-column label="姓名" prop="name" :width="180"></b-table-column>
    <b-table-column label="地址" :min-width="200">
        <template scope="s">
            {{s.row.address}} <a href="javascript:;">编辑</a>
        </template>
    </b-table-column>
</b-table>
<script>
    export default{
        data(){
            return {
                data:[
                    {
                        date: '2016-05-01',
                        name: '张三',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区九堡'
                    },
                    {
                        date: '2016-05-02',
                        name: '李四',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区七堡'
                    },
                    {
                        date: '2016-05-03',
                        name: '熊大',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区翠园'
                    },
                    {
                        date: '2016-05-04',
                        name: '熊二',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区古荡'
                    },
                    {   
                        date: '2016-05-05',
                        name: '光头强',
                        province: '浙江省',
                        city: '杭州市',
                        address: '拱墅区申花'
                    },
                    {
                        date: '2016-05-06',
                        name: '贝贝',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区灵隐'
                    }
                ]
            }
        }
    }
</script>
```
:::

:::demo 展开行的例子。定义一个`type`为`expand`的列，并为其定义展开后显示的内容。
```html
<b-table :data="data" style="width:500px;">
    <b-table-column type="expand">
        <template scope="s">
            <p>{{s.row.province}}</p>
            <p>{{s.row.city}}</p>
            <p>{{s.row.address}}</p>
        </template>    
    </b-table-column>
    <b-table-column label="日期" prop="date" :width="180"></b-table-column>
    <b-table-column label="姓名" prop="name" :min-width="180"></b-table-column>
</b-table>
<script>
    export default{
        data(){
            return {
                data:[
                    {
                        date: '2016-05-01',
                        name: '张三',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区九堡'
                    },
                    {
                        date: '2016-05-02',
                        name: '李四',
                        province: '浙江省',
                        city: '杭州市',
                        address: '江干区七堡'
                    },
                    {
                        date: '2016-05-03',
                        name: '熊大',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区翠园'
                    },
                    {
                        date: '2016-05-04',
                        name: '熊二',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区古荡'
                    },
                    {   
                        date: '2016-05-05',
                        name: '光头强',
                        province: '浙江省',
                        city: '杭州市',
                        address: '拱墅区申花'
                    },
                    {
                        date: '2016-05-06',
                        name: '贝贝',
                        province: '浙江省',
                        city: '杭州市',
                        address: '西湖区灵隐'
                    }
                ]
            }
        }
    }
</script>
```
:::

## b-table Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| data | 表格数据 | Array | - |
| border | 是否有纵向边框 | Boolean | false |
| height | 表格高度，应为该高度产生的滚动条在表格内部 | String，Number | - |
| stripe | 是否启用斑马纹 | Boolean | false |
| fit | 列宽是否自撑开 | Boolean | true |
| show-header | 是否显示表头 | Boolean | true |
| highlight-current-row | 是否要高亮当前行 | Boolean | false |
| current-row-key | 当前行默认的key，只写属性，与`row-key`产生的`key`对应 | String，Number | - |
| row-hover | hover某一行的时候是否高亮 | Boolean | false |
| row-class-name | 行自定义类名的函数，也可以使用字符串为所有行设置一个固定的类名 | Function(row, index)，String | - |
| row-style | 行自定义样式的函数，也可以使用一个固定的`Object`为所有行设置一样的样式 | Function(row, index)，Object | - |
| row-key | 获取行的唯一`key`的函数，启用`reserve-selection`时必填。| Function(row)，String | - |
| empty-text | 表格数据为空时显示的内容，也可以通过`slot=empty`设置 | String | - |
| default-expand-all | 是否默认展开所有行 | Boolean | false |
| expand-row-keys | 设置当前展开的行，与`row-key`产生的`key`对应 | Array | - |
| default-sort | 默认的排序。`prop`指定排序的属性，`order`指定排序的规则，可选值`ascending`（默认值），`descending` | Object | - |

## b-table Events

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| select | 启用多选，并勾选某一行时触发 | selection, row |
| select-all | 启用多选，勾选全选按钮时触发 | selection |
| selection-change | 启用多选，勾选内容变化时触发 | selection |
| cell-mouse-enter | 鼠标进入某一单元格时触发 | row, column, cell, event |
| cell-mouse-leave | 鼠标离开某一单元格时触发 | row, column, cell, event |
| cell-click | 点击某一单元格时触发 | row, column, cell, event |
| row-click | 当某一行被点击时会触发 | row, event, column |
| row-contextmenu | 当某一行被鼠标右键点击时会触发 | row, event |
| row-dblclick | 当某一行被双击时会触发 | row, event |
| header-click | 当某一列的表头被点击时会触发 | column, event |
| sort-change | 当表格的排序条件发生变化的时候会触发 | {column, prop, order} |
| current-change | 当表格的当前行发生变化的时候会触发 | currentRow, oldCurrentRow |
| expand | 展开或关闭某一行时触发 | row, expanded |

## b-table Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| clearSelection | 清空用户的选择 |  - |
| toggleRowSelection | 切换某一行的选中状态 | row，selected |

## b-table-column Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| label | 表头内容 | String | - |
| prop | 内容取值的键名 | String | - |
| type | 列的类型。可选值`selection`多选，`index`序号，`expand`展开 | String | - |
| width | 宽度，如100px | String | - |
| min-width | 最小宽度，同上 | String | - |
| fixed	| 该列是否固定，可选值`left`，`right`。该属性启用后默认为左边 | String，Boolean | - |
| hidden | 是否隐藏该列 | Boolean | false |
| sortable | 是否支持排序，如果设置为`custom`，代表用户希望远程排序，需要监听`sort-change`事件来处理 | Boolean，String | false |
| sort-method | 排序的处理函数 | Function(v1, v2) | - |
| resizable | 列的宽度是否支持拖拽改变 | Boolean | true |
| render-header | 表头区域的自定义渲染，参见`Vue`的<a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank">Render函数</a> | Function(h, { column, $index }) | - |
| formatter | 格式化表头内容 | Function(row, column) | - |
| show-overflow-tooltip | 单元格内容过长时隐藏并显示气泡 | Boolean | false |
| align | 对齐方式，可选值`left`，`center`，`right` | String | left |
| header-align | 表头对齐方式，可选值同上，默认和表格对齐方式一致 | String | - |
| class-name | 自定义列的类名 | String | - |
| selectable | 可否被勾选的计算函数，`type=selection`的列有效 | Function(row, index) | - |
| reserve-selection | 表格内容切换时是否保留旧数据的勾选状态，`type=selection`的列有效 | Boolean | false |
