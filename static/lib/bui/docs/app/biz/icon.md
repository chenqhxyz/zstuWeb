<script>
  var iconList = require('src/utils/icon.json');

  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>
<style lang="less">
  @import '../../../src/less/var';
  .demo-icon {
    i {
        margin: 0 20px;
    }
    button i{
        margin: 0;
    }
    .icon-list {
        overflow: hidden;
        list-style: none;
        padding: 0;
        border: @border-base;
        border-radius: @radius-base;
      }
      .icon-list li {
        float: left;
        width: 16.66%;
        text-align: center;
        height: 120px;
        line-height: 120px;
        color: #666;
        font-size: 13px;
        transition: color .15s linear;

        border-right: @border-base;
        border-bottom: @border-base;
        margin-right: -@border-base-size;
        margin-bottom: -@border-base-size;
        text-align: center;
      }
      .icon-list li span {
          display: inline-block;
          line-height: normal;
          vertical-align: middle;
          font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
          color: @color-help;
        }
      .icon-list li  i {
          display: block;
          font-size: 24px;
          margin-bottom: 15px;
          color: @color-help;
        }
  }
</style>
# 图标

一套常用的图标集合。

## 使用方法

设置类名为 `b-icon-{iconName}` 即可使用，还可以通过color和font-size来设置颜色和大小。例如：

:::demo
```html
<div class="demo-icon">
    <i class="b-icon-edit"></i>
    <i class="b-icon-share" style="font-size:24px;"></i>
    <i class="b-icon-delete" style="color:red;"></i>
    <b-button type="primary" icon="search">搜索</b-button>
</div>

```
:::

### 图标集合
<div class="demo-icon">
    <ul class="icon-list">
      <li v-for="name in icons">
        <span>
          <i :class="'b-icon-' + name"></i>
          {{'b-icon-' + name}}
        </span>
      </li>
    </ul>
</div>
