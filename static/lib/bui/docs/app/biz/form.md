<script>
  export default {
    data() {
      return {
        form1: {
          name: '',
          region: '',
          type: [],
          resource: '',
          desc: ''
        },
        rules1: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动类型', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' },
            { validator(rule,value,cb){
                if(value && value.indexOf('\\') > -1){
                    cb(new Error('不能包含特殊字符\\'));
                }
                cb();
            }, trigger:'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm1() {
        this.$refs.form1.validate(valid => {
          if (valid) {
            alert('创建成功');
          }
        });
      },
      resetForm1() {
        this.$refs.form1.resetFields();
      }
    }
  }
</script>

# 表单

## 概述

我们使用`b-form`和`b-form-item`作为其他表单控件的容器，提供数据校验和重置功能。

## 代码示例

::: demo 本例提供了表单的两个核心功能校验和重置。`b-form-item`必须内嵌在`b-form`下。`b-from`通过`model`属性定义表单的数据对象，每个`b-form-item`的`prop`属性定义关联的属性名，`label`定义标题。`rules`属性定义了校验的规则。被定义为`required`的表单项的标题前部会有个红色的星号。
```html
<b-form :model="form1" :rules="rules1" ref="form1" label-width="100px">
  <b-form-item label="名称" prop="name">
    <b-input v-model="form1.name"></b-input>
  </b-form-item>
  <b-form-item label="区域" prop="region">
    <b-select v-model="form1.region" placeholder="请选择活动区域">
      <b-option label="北部" value="1"></b-option>
      <b-option label="南部" value="2"></b-option>
    </b-select>
  </b-form-item>
  <b-form-item label="类型" prop="type">
    <b-checkbox-group v-model="form1.type">
      <b-checkbox label="图片" value="1"></b-checkbox>
      <b-checkbox label="文字" value="1"></b-checkbox>
    </b-checkbox-group>
  </b-form-item>
  <b-form-item label="资源" prop="resource">
    <b-radio-group v-model="form1.resource">
      <b-radio label="首页轮播" value="1"></b-radio>
      <b-radio label="线下推广" value="2"></b-radio>
    </b-radio-group>
  </b-form-item>
  <b-form-item label="内容" prop="desc">
    <b-input type="textarea" v-model="form1.desc"></b-input>
  </b-form-item>
  <b-form-item>
    <b-button type="primary" @click="submitForm1">立即创建</b-button>
    <b-button @click="resetForm1">重置</b-button>
  </b-form-item>
</b-form>
<script>
  export default {
    data() {
      return {
        form1: {
          name: '',
          region: '',
          type: [],
          resource: '',
          desc: ''
        },
        rules1: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动类型', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' },
            { validator(rule,value,cb){
                if(value && value.indexOf('\\') > -1){
                    cb(new Error('不能包含特殊字符\\'));
                }
                cb();
            }, trigger:'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm1() {
        this.$refs.form1.validate(valid => {
          if (valid) {
            alert('创建成功');
          }
        });
      },
      resetForm1() {
        this.$refs.form1.resetFields();
      }
    }
  }
</script>
```
:::

## b-form Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| model   | 表单数据对象 | Object      |  - |
| rules   | 校验规则，参见<a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a>| Object | - |
| show-message  | 是否显示错误信息 | Boolean | true |
| label-width | 默认的标题区域宽度 | String | - |
| label-suffix | 默认的标题后缀 | String | ： |
| inline    | 行内模式 | Boolean | false |

## b-from Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| validate | 对整个表单进行校验 | callback 回调函数（Function(校验结果)) |
| validateField | 对某个字段进行校验 | prop 字段名，callback 回调函数（Function(错误信息)) |
| resetFields | 对整个表单进行重置，所有字段值重置为空并移除校验结果 | - |

## b-form-item Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| label | 标题名称 | String | - |
| prop  | 关联的属性名，来自于`b-form`的`model` | String    | - |
| label-width | 标题区域的宽度，如 '50px' | String | - |
| required | 是否必填，如不设置，则依据校验规则判断 | Boolean | false |
| show-message  | 是否显示错误信息 | Boolean | true |
| rules    | 单独定义的校验规则 | Object | - |
| error    | 错误信息，为空不显示 | String | - |
