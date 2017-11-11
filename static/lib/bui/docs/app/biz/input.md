<script>
    export default{
        data(){
            return {
                val1:'',
                val2:'',
                val3:'',
                val4:''
            }
        },
        methods:{
            handleIconClick(){
                alert('click');
            },    
            handleFetchSuggestions(str, cb){
                cb(['上海','青岛','西安','厦门','武汉','长沙','杭州','宁波','宁夏','海南','海口'].filter(item => {
                    return !str || item.indexOf(str) > -1;
                }).map(value =>  {
                    return {
                        value
                    };
                }));
            }
        }
    }
</script>

# 输入框

## 概述

把`input`和`textarea`整合成的`b-input`组件。同时我们还提供一个带有自动提示功能的`b-complete`组件。

## 代码示例

::: demo 用`v-model`进行双向数据绑定。通常我们还会通过`placeholder`设置提示文案，`width`设置宽度，`disabled`设置是否禁用。
```html
<b-input v-model="val1" placeholder="提示文案" :width="150"></b-input>
<script>
    export default{
        data(){
            return {
                val1: ''
            }
        }
    }
</script>
```
:::

::: demo `type`属性设为`textarea`即可实现文本域效果。`rows`定义显示的行数，`auto-size`定义行的自增长行为，`maxlength`定义最大字符串个数。
```html
<b-input type="textarea" v-model="val2" :rows="3" auto-size :maxlength="200"></b-input>
<script>
    export default{
        data(){
            return {
                val2:''
            }
        }
    }
</script>

```
:::

::: demo 可以通过`icon`属性在组件尾部增加图标，同时有个`on-icon-click`钩子函数可以使用。也可以通过`icon-left`属性在组件头部增加图标。
```html
<b-input v-model="val3" icon="search" :on-icon-click="handleIconClick"></b-input>
<script>
    export default{
        data(){
            return {
                val3:''
            }
        },
        methods:{
            handleIconClick(){
                alert('click');
            }    
        }
    }
</script>
```
:::

::: demo `b-autocomplete`会附带输入提示功能，`fetch-suggestions`提供数据查询函数，函数接受被查询字符串和`cb`回调函数，最终的结果通过`cb`返回，结构如下\[{value:结果1},...\]。`must-select`可以强制要求文本框最终的值必须是某一个查询结果。
```html
<b-autocomplete v-model="val4" :fetch-suggestions="handleFetchSuggestions" placeholder="请输入关键字" must-select></b-autocomplete>
<script>
    export default{
        data(){
            return {
                val4:''
            }
        },
        methods:{
            handleFetchSuggestions(str, cb){
                cb(['上海','青岛','西安','厦门','武汉','长沙','杭州','宁波','宁夏','海南','海口'].filter(item => {
                    return !str || item.indexOf(str) > -1;
                }).map(value => {
                    return {
                        value
                    };
                }));
            }
        }
    }
</script>
```
:::

## b-input Props

| 参数          | 说明            | 类型            | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | 文本框的值           | String, Number  | - |
| width         | 宽度 | String,Number | - |
| type          | 输入框的类型，同原生的`input`的`type`属性，可选值`text`，`textarea`，`number`，`password`等    | String | text |
| placeholder   | 提示文本    | String          | - |
| disabled      | 是否禁用  | Boolean | false   |
| icon          | 尾部图标 | String          | - |
| on-icon-click | 尾部图标点击事件钩子函数 | Function | - |
| icon-left     | 头部图标 | String | - |
| maxlength     | 最大输入长度 | Number | - |
| size          | 输入框尺寸，可选值`short`，`long`，`longer`，`fit` | String | - |
| name | 原生`name`属性 | String | - |
| max | 原生`max`属性| Number | - |
| min | 原生`min`属性| Number | - |
| readonly | 原生`readonly`属性| Boolean | - |
| auto-complete | 原生`auto-complete`属性 | String | - |
| autofocus | 原生`autofocus`属性| Boolean | - |

### 文本域（type = textarea）

| 参数 | 说明 | 类型 | 默认值  |
| ---- | --- |----- | ------ |
| rows | 行数 |  Number | 2 |
| autosize | 高度自适应，可通过对象来控制最小最大高度，如`{ minRows: 2, maxRows: 6 }`  |  Boolean，Object |  false   |

### b-input Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| blur | 失焦时触发 | event |
| focus | 获取焦点时触发 | event |
| change | 改变值时触发 | 当前值 |

## b-autocomplete Props

| 参数          | 说明            | 类型            | 默认值   |
|-------------  |---------------- |---------------- |-------- |
| value         | 文本框的值，同`b-input` | String, Number  | - |
| width         | 宽度，同`b-input` | String,Number | - |
| type          | 输入框的类型，同原生的`input`的`type`属性，可选值`text`，`textarea`，`number`，`password`等，同`b-input`    | String | text |
| placeholder   | 提示文本，同`b-input`    | String          | - |
| disabled      | 是否禁用，同`b-input`  | Boolean | false   |
| icon          | 尾部图标，同`b-input` | String          | - |
| on-icon-click | 尾部图标点击事件钩子函数，同`b-input` | Function | - |
| icon-left     | 头部图标，同`b-input` | String | - |
| size          | 输入框尺寸，可选值`short`，`long`，`longer`，`fit`，同`b-input` | String | - |
| trigger-on-focus | 输入框获取焦点时显示建议列表 | Boolean | true |
| fetch-suggestions | 数据查询函数，函数接受被查询字符串和`cb`回调函数，最终的结果通过`cb`返回，结构如下\[{value:结果1},...\]，具体使用可以见上面的例子 | Function  | - |
| must-select | 内容必须是某个提示结果 | Boolean | false |
| popper-class | 为建议列表增加类名 | String | - |
| name | 原生`name`属性 | String | - |
| autofocus | 原生`autofocus`属性| Boolean | - |

## b-autocomplete Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| select | 选中建议项时触发 | 选中的建议项，如`{value：值}` |
