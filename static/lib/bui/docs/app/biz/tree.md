<script>
    export default{
        data(){
            return {
                data:[
                    {
                        label:'节点 1',
                        children:[
                            {label:'节点 1-1'},
                            {label:'节点 1-2'},
                            {label:'节点 1-3'}
                        ]
                    },
                    {
                        label:'节点 2',
                        children:[
                            {label:'节点 2-1'}
                        ]
                    },
                    {
                        label:'节点 3',
                        children:[
                            {
                                label:'节点 3-1',
                                children:[
                                    {label:'节点 3-1-1'},
                                    {label:'节点 3-1-2'}
                                ]
                            },
                            {label:'节点 3-2'}
                        ]
                    }
                ],
                index:3
            }
        },
        methods:{
            loadNode(node,resolve){
                if(node.level === 0){
                    return resolve([{label:'节点 1'},{label:'节点 2'},{label:'节点 3'}]);
                }
                if(node.level > 3){
                    return resolve([]);
                }
                let rtn = [],k = Math.random();
                if( k > .3){
                    rtn.push({label:'节点 '+ ++this.index});
                }
                if( k > .5){
                    rtn.push({label:'节点 '+ ++this.index});
                }
                if(k> .7){
                    rtn.push({label:'节点' + ++this.index});
                }
                setTimeout(_=>{
                    resolve(rtn);
                },500);
            }
        }
    }
</script>   

# 树形控件

## 概述

我是使用`b-tree`来实现结构清晰，可展开可折叠的树形组件效果。

## 代码示例

基础的树形结构展示和选中

::: demo `data`属性绑定数据，`props`定义当前标签和子节点的取值建名，启用`highlight-current`则高亮显示选中值，启用`default-expand-all`默认展开所有节点。
```html
<b-tree :data="data" highlight-current default-expand-all></b-tree>
<script>
    export default{
        data(){
            return {
                data:[
                    {
                        label:'节点 1',
                        children:[
                            {label:'节点 1-1'},
                            {label:'节点 1-2'},
                            {label:'节点 1-3'}
                        ]
                    },
                    {
                        label:'节点 2',
                        children:[
                            {label:'节点 2-1'}
                        ]
                    },
                    {
                        label:'节点 3',
                        children:[
                            {
                                label:'节点 3-1',
                                children:[
                                    {label:'节点 3-1-1'},
                                    {label:'节点 3-1-2'}
                                ]
                            },
                            {label:'节点 3-2'}
                        ]
                    }
                ]
            }
        }
    }
</script>
```
:::

::: demo 启用`accordion`属性可以达到手风琴效果，每次只会展开一项。
```html
<b-tree :data="data" accordion></b-tree>
<script>
    export default{
        data(){
            return {
                data:[
                    {
                        label:'节点 1',
                        children:[
                            {label:'节点 1-1'},
                            {label:'节点 1-2'},
                            {label:'节点 1-3'}
                        ]
                    },
                    {
                        label:'节点 2',
                        children:[
                            {label:'节点 2-1'}
                        ]
                    },
                    {
                        label:'节点 3',
                        children:[
                            {
                                label:'节点 3-1',
                                children:[
                                    {label:'节点 3-1-1'},
                                    {label:'节点 3-1-2'}
                                ]
                            },
                            {label:'节点 3-2'}
                        ]
                    }
                ]
            }
        }
    }
</script>
```
:::

::: demo 
```html
<b-tree lazy :load="loadNode" show-checkbox></b-tree>
<script>
    export default{
        data(){
            return {
                index:3
            }
        },
        methods:{
            loadNode(node,resolve){
                if(node.level === 0){
                    return resolve([{label:'节点 1'},{label:'节点 2'},{label:'节点 3'}]);
                }
                if(node.level > 3){
                    return resolve([]);
                }
                let rtn = [],k = Math.random();
                if( k > .5){
                    rtn.push({label:'节点 ' + ++index});
                }
                if( k > .7){
                    rtn.push({label:'节点 ' + ++index});
                }
                if(k> .9){
                    rtn.push({label:'节点 ' + ++index});
                }
                setTimeout(_=>{
                    resolve(rtn);
                },500);
            }
        }
    }
</script>
```
:::

## b-tree Props

| 参数                    | 说明                                       | 类型                          | 默认值   |
| --------------------- | ---------------------------------------- | --------------------------- | ----- |
| data                  | 数据                                     | Array                       | - |
| props                 | 节点数据取值配置，`label`节点标签，`children`子节点数组  | Object                      |  {children: 'children',label: 'label'}     |
| node-key              | 表示节点`key`的键名,值应该唯一               | String                      | -     |
| current-node-key      | 当前选中节点的`key`，对应`node-key`                        | String, Number              | -     |
| highlight-current     | 是否高亮当前选中节点  | Boolean                     | false |
| default-expanded-keys | 默认展开的节点的`key`的数组，对应`node-key`                         | Array   | -     |
| default-expand-all    | 是否默认展开所有节点                               | Boolean  | false |
| expand-on-click-node  | 是否在点击节点任意部位的时候展开或收缩，如果为`false`则只在点箭头图标的时候才有效果 | Boolean                     | true  |
| auto-expand-parent    | 展开子节点的时候是否自动展开父节点                        | Boolean                     | true  |
| accordion             | 是否每次只展开一个同级树节点，即手风琴效果                         | Boolean                     | false |
| show-checkbox         | 是否显示选择框                                 | Boolean                     | false |
| check-strictly        | 在显示选择框的情况下，是否严格的遵循父子不互相关联的做法  | Boolean                     | false |
| default-checked-keys  | 默认勾选的节点的`key`的数组，对应`node-key`                         | Array  | -     |
| lazy                  | 是否启用延迟加载                                | Boolean      | false     |
| load                  | 延迟加载数据的方法                               | Function(node, resolve)     | -     |
| render-content        | 自定义节点内容的渲染                   | Function(h, { node })      | -     |
| filter-node-method    | 筛选节点的方法 | Function(value, data, node) | -     |

## b-tree Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| node-click     | 节点被点击时触发   | 原数据对象，节点信息，组件实例 |
| check-change   | 节点选中状态发生变化时触发 | 原数据对象，节点是否被选择，后代节点是否有被选中 |
| current-change | 当前选中节点变化时触发| 当前选中节点的原数据，当前选中节点的节点信息  |

## b-tree Methods

| 方法名             | 说明                                       | 参数                                       |
| --------------- | ---------------------------------------- | ---------------------------------------- |
| filter          | 对节点进行筛选                               | 参数传递给`filter-node-method`作为其第一个参数 |
| getCheckedNodes | 获取勾选的节点 | leafOnly 是否只返回叶子节点数据，默认是`false` |
| setCheckedNodes | 设置勾选的节点 | nodes 被勾选节点的数组            |
| getCheckedKeys  | 获取勾选节点的`key`数组 | leafOnly 是否只返回叶子节点数据，默认是`false` |
| setCheckedKeys  | 通过`key`设置勾选的节点  | keys 被勾选的`key`的数组，leafOnly是否只勾选叶子节点，默认为`true` |
| setChecked      | 设置某个节点的勾选状态，可以通过`key`或数据对象 | key/node 待处理节点信息，checked 是否勾选， deep，是否同时设置后代节点，默认`false` |



