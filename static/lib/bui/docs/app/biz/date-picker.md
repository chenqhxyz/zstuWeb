<script>
    export default{
        data(){
            return {
                val1:'',
                val2:'',
                val3:'',
                val4:'',
                val5:'',
                val6:[],
                val7:[],
                val8:'',
                val9:'',
                options8:{
                    shortcuts:[
                        {
                            text:'昨天',
                            onClick(picker){
                                picker.$emit('pick',new Date(Date.now() - 24 * 3600000));
                            }
                        },
                        {
                            text:'一周前',
                            onClick(picker){
                                picker.$emit('pick',new Date(Date.now() - 7 * 24 * 3600000));
                            }
                        }
                    ]
                },
                options9:{
                    disabledDate(time){
                        let valid_time = new Date();
                        valid_time.setHours(0,0,0,0);
                        return time < valid_time;
                    }
                }
            }
        }
    }
</script>

# 日期选择器

## 概述

通过`b-data-picker`我们能获取一个`Date实例`用来表示`年份`/`月份`/`周`/`日期`/`日期+时间`或者一个`Date实例的数组`表示所选`日期`/`日期+时间`的范围。

## 代码示例

::: demo `type`的默认值为`date`，默认我们使用的就是日期选择器。
```html
<b-date-picker v-model="val1"></b-date-picker>
<script>
    export default{
        data(){
            return {
                val1:''
            }
        }
    }
</script>
```
:::

::: demo `type`可以设为`year`，`month`，`week`，`datetime`来实现不同的选择器。`placeholder`属性可以定义默认提示。
```html
<b-date-picker v-model="val2" type="datetime" placeholder="请选择时间"></b-date-picker>
<b-date-picker v-model="val3" type="year" placeholder="请选择年份"></b-date-picker>
<b-date-picker v-model="val4" type="month" placeholder="请选择月份"></b-date-picker>
<b-date-picker v-model="val5" type="week" placeholder="请选择周"></b-date-picker>
<script>
    export default{
        data(){
            return {
                val2:'',
                val3:'',
                val4:'',
                val5:''
            }
        }
    }
</script>
```
:::

::: demo `type`属性设为`daterange`/`datetimerange`分别实现日期的选择/时间的选择。
```html
<b-date-picker v-model="val6" type="daterange" placeholder="请选择日期范围"></b-date-picker>
<b-date-picker v-model="val7" type="datetimerange" placeholder="请选择时间范围"></b-date-picker>
<script>
    export default{
        data(){
            return {
                val6:[],
                val7:[]
            }
        }
    }
</script>
```
:::

::: demo 通过配置`picker-options`中的`shortcuts`，格式如下`\[{text:选项名称，onClick：选项点击事件}\]`，可以定义一些功能性的快捷选项。
```html
<b-date-picker v-model="val8" :picker-options="options8" placeholder="带快捷选项"></b-date-picker>
<script>
    export default{
        data(){
            return {
                val8:'',
                options8:{
                    shortcuts:[
                        {
                            text:'昨天',
                            onClick(picker){
                                picker.$emit('pick',new Date(Date.now() - 24 * 3600000));
                            }
                        },
                        {
                            text:'一周前',
                            onClick(picker){
                                picker.$emit('pick',new Date(Date.now() - 7 * 24 * 3600000));
                            }
                        }
                    ]
                }
            }
        }
    }
</script>
```
:::

::: demo 通过配置`picker-options`中的`disabledDate`，可以使某些时间不可被选择。
```html
<b-date-picker v-model="val9" :picker-options="options9" placeholder="带禁选"></b-date-picker>
<script>
    export default{
        data(){
            return {
                val9:'',
                options9:{
                    disabledDate(time){
                        // 不能选择今天之前的日期
                        let valid_time = new Date();
                        valid_time.setHours(0,0,0,0);
                        return time < valid_time;
                    }
                }
            }
        }
    }
</script>
```
:::

## b-date-picker Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| value | 当前的值 | Date，\[Date,Date] | - |
| type | 类型，可选值`year`，`month`，`date`，`week`，`datetime`，`datetimerange`，`daterange` | String | date |
| picker-options | 额外配置，具体属性见下表 | Object | - |
| placeholder | 提示文案 | String | — |
| format | 时间日期格式化，年 `yyyy`，月 `MM`，日 `dd`，小时 `HH`，分 `mm`，秒 `ss`  | String | | yyyy-MM-dd |
| range-separator | 范围展示时的分隔符 | string | “-” |
| clearable | 是否显示清空按钮 | Boolean | true |
| editable | 可否直接在文本框编辑内容 | Boolean | true |
| disabled | 是否禁用 | Boolean | false |
| readonly | 是否只读 | Boolean | false |
| size     | 文本框尺寸，可选值`short`，`long`，`longer`，`fit`，同`b-input`    | String | - |
| align | 弹出层对齐方式，可选值`left`, `center`, `right` | String | left |
| popper-class | 自定义弹出层类名 | String | - |

### picker-options Props

| 参数 | 说明 | 类型 | 默认值  |
| ---- | --- |----- | ------ |
| shortcuts | 设置快捷选项，使一个数组，成员对象的配置见下表 | \[Object] | - |
| disabledDate | 设置不可选的时间，函数的入参使被计算的时间，结果返回`true`则禁选 | Function | - |
| firstDayOfWeek | 周起始日，可选值`1`到`7` | Number | 7 |

### shortcuts Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| text | 选项标题 | String | - |
| onClick | 选中后的回调函数，入参使`vm当前选择器实例对象`，可通过触发`pick`事件设置选择器的值。如`vm.$emit('pick', new Date())` | Function | - |

## b-date-picker Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| change | 当前值改变时触发 | 格式化后的字符串结果 |
