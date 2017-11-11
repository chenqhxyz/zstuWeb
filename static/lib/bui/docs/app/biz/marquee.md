# 滚动字幕

## 概述

我们使用`b-marquee`和`b-marquee-item`来实现滚动字幕效果。

## 代码示例

:::demo `height`属性设置滚动区域高度，`interval`设置两次播放的间隔时间，默认为3秒。

```html
  <div class="block">
    <b-marquee height="30px" interval="3000">
      <b-marquee-item v-for="item in 4">
        <i class="b-icon-caret-left" style="margin: 0 4px 0 6px;color: #FF8800;"></i>
        <span>{{ item }}</span>
        <a href="http://www.beibei.com" target="_blank" style="margin-left: 4px;">点此查看</a>
      </b-marquee-item>
    </b-marquee>
  </div>
```
:::


## b-marquee Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| height | 滚动区域高度 | String | — |
| interval | 间隔时间 | Number | 3000 |


