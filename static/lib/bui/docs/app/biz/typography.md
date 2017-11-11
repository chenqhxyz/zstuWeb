<style lang="less">
@import '../../../src/less/var';
.demo-typo-box {
    height: 160px;
    width: 240px;
    position: relative;
    border: @border-base;
    font-size: 40px;
    color: #1f2d3d;
    text-align: center;
    line-height: 122px;
    padding-bottom: 36px;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 17px;
    border-radius: @radius-base;

    .name {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-top: @border-base;
      font-size: 14px;
      color: @color-help;
      line-height: 35px;
      text-align: left;
      text-indent: 10px;
      font-family: 'Helvetica Neue';
    }
  }
  .demo-typo-size {
    color:#4A4A4A!important;
  }
  .typo-PingFang {
    font-family: 'PingFang SC';
  }
  .typo-Hiragino {
    font-family: 'Hiragino Sans GB';
  }
  .typo-Microsoft {
    font-family: 'Microsoft YaHei';
  }
  /* 英文 */
  .typo-Helvetica{
    font-family: 'Helvetica';
  }
  .typo-Tahoma {
    font-family: 'Tahoma';
  }
  .typo-Arial {
    font-family: 'Arial';
  }

</style>

# 字体

PC 端网页字体应用原则：
1. 英文优先，mac 优先（ mac 字体对 win 用户无影响）
2. 兼顾不同的操作系统
3. 浏览器向下兼容

## 字体家族

```css
font-family: Helvetica, Tahoma, Arial, "PingFang SC","Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", sans-serif;
```


## 中文字体

<div class="demo-typo-box typo-PingFang">
  中文字体
  <div class="name">PingFang SC</div>
</div>
<div class="demo-typo-box typo-Hiragino">
  中文字体
  <div class="name">Hiragino Sans GB</div>
</div>
<div class="demo-typo-box typo-Microsoft">
  中文字体
  <div class="name">微软雅黑</div>
</div>

## 英文／数字字体

<div class="demo-typo-box typo-Helvetica">
  Font-family
  <div class="name">Helvetica</div>
</div>
<div class="demo-typo-box typo-Tahoma">
  Font-family
  <div class="name">Tahoma</div>
</div>
<div class="demo-typo-box typo-Arial">
  Font-family
  <div class="name">Arial</div>
</div>

## 字体使用规范

<table class="demo-typo-size markdown-table">
  <thead>
    <tr>
        <th>用途</th>
        <th>效果</th>
        <th>用法</th>
        <th>颜色</th>
        <th>字号</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><h1>主标题</h1></td>
      <td><h1>我是页面主标题 加粗</h1></td>
      <td><h1>h1 标签</h1></td>
      <td><h1>#4A4A4A</h1></td>
      <td><h1>20px</h1></td>
    </tr>
    <tr>
      <td><h2>次级标题</h2></td>
      <td><h2>我是次级标题 加粗</h2></td>
      <td><h2>h2 标签</h2></td>
      <td><h2>#4A4A4A</h2></td>
      <td><h2>16px</h2></td>
    </tr>
  <tr>
      <td><h3>小标题（段落标题）</h3></td>
      <td><h3>我是小标题 加粗</h3></td>
      <td><h3>h3 标签</h3></td>
      <td><h3>#4A4A4A</h3></td>
      <td><h3>14px</h3></td>
    </tr>
    <tr>
      <td>正文</td>
      <td>我是正文</td>
      <td>默认</td>
      <td>#4A4A4A</td>
      <td>14px</td>
    </tr>
  <tr class="b-text-small">
      <td>小文本（仅表格使用）</td>
      <td>我是小正文</td>
      <td>b-text-small 类</td>
      <td>#4A4A4A</td>
      <td>12px</td>
  </tr>
  <tr class="b-text-help">
      <td>辅助文字</td>
      <td>我是辅助文字</td>
      <td>b-text-help 类</td>
      <td>#8F8F8F</td>
      <td>14px</td>
    </tr>
  <tr class="b-text-disabled">
      <td>失效文字</td>
      <td>我是失效文字</td>
      <td>b-text-disabled 类</td>
      <td>#cccccc</td>
      <td>14px</td>
    </tr>
    <tr class="b-text-link">
      <td>链接文字</td>
      <td>我是链接文字</td>
      <td>b-text-link 类</td>
      <td>#4D7DFF</td>
      <td>14px</td>
    </tr>
  <tr class="b-text-data-big">
       <td>大数据</td>
        <td>重要数字 加粗</td>
        <td>b-text-data-big 类</td>
        <td>#FF4965</td>
        <td>32px</td>
    </tr>
    <tr class="b-text-data">
      <td>小数据</td>
      <td>我是重要数字</td>
      <td>b-text-data 类</td>
      <td>#FF4965</td>
      <td>24px</td>
    </tr>
  </tbody>
</table>
