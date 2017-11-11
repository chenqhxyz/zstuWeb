# 导航栏

## 概述

我们使用`b-menu`（菜单）， `b-menu-item`（菜单项）， `b-submenu`（子菜单）， `b-menu-item-group`（菜单组） 来实现菜单栏功能。

## 代码示例

::: demo `mode`属性设为`horizontal`可以使导航菜单变更为水平模式。`b-submenu`组件可以为其生成二级菜单。
```html
<b-menu default-active="1" mode="horizontal" style="padding-left: 55px;background-color: #2A2E33;">
    <b-menu-item index="1">运营平台</b-menu-item>
    <b-submenu index="2">
        <template slot="title">我的工作</template>
        <b-menu-item index="2-1">签到</b-menu-item>
        <b-menu-item index="2-2">排期</b-menu-item>
    </b-submenu>
    <b-menu-item index="3"><a href="http://www.beibei.com" target="_blank">贝贝网</a></b-menu-item>
</b-menu>
```
:::

::: demo `b-submenu`的标题必须通过`slot=title`来定义。子菜单时可以折叠的。`index`定义子菜单和菜单项的唯一标识。`default-active`定义当前激活的菜单项，`default-openeds`定义当前展开的子菜单。也可以通过`b-menu-item-group`来分组菜单项，但是该分组是不可折叠的。
```html
<b-menu default-active="1-1" :default-openeds="['1','2']" style="width:200px;height:400px;display:inline-block;vertical-align: top;">
  <b-submenu index="1">
      <template slot="title"><i class="b-icon-message"></i>导航一</template>
      <b-menu-item index="1-1">选项1</b-menu-item>
      <b-menu-item index="1-2">选项2</b-menu-item>
      <b-menu-item index="1-3">选项3</b-menu-item>
  </b-submenu>
  <b-submenu index="2">
        <template slot="title"><i class="b-icon-message"></i>导航二</template>
        <b-menu-item index="2-1">选项1</b-menu-item>
        <b-menu-item index="2-2">选项2</b-menu-item>
        <b-menu-item index="2-3">选项3</b-menu-item>
  </b-submenu>
</b-menu>
<b-menu default-active="1" style="width:200px;height:400px;display:inline-block;margin-left: 100px;vertical-align: top;">
    <b-menu-item-group>
        <template slot="title"><i class="b-icon-message"></i>分组一</template>
        <b-menu-item index="1">导航一</b-menu-item>
        <b-menu-item index="2">导航二</b-menu-item>
    </b-menu-item-group>
    <b-menu-item-group>
        <template slot="title"><i class="b-icon-message"></i>分组二</template>
        <b-menu-item index="3">导航三</b-menu-item>
        <b-menu-item index="4">导航四</b-menu-item>
    </b-menu-item-group>
</b-menu>
```
:::

## b-menu Props

| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------- |
| mode     | 布局模式，可选值`horizontal`,`vertical`  | String  | vertical |
| default-active | 当前激活菜单项 | String    | - |
| default-openeds | 当前打开的子菜单 | Array    | - |
| unique-opened  | 是否保持同一时刻只展开一个子菜单 | Boolean   | false |
| menu-trigger  | 子菜单打开的触发方式(`horizontal`时有效)，可选值`hover`，`click`| String   | hover   |
| router  | 是否使用`Vue Router`，启用后会在激活菜单项时以`index`作为route的`path`进行路由跳转 | Boolean   | false   |

## b-menu Events

| 名称  | 说明  | 参数  |
|---------- |-------- |---------- |
| select  | 激活菜单时触发 | 选中菜单项的index，index的路径数组  |
| open  | 子菜单展开时触发 | 对应子菜单的index，index的路径数组 |
| close  | 子菜单收起时触发 | 对应子菜单的index，index的路径数组 |

## b-submenu Prosp

| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------- |
| index     | 唯一标识   | String  | - |

## b-menu-item-group Props

| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------- |
| title     | 标题   | String  | - |

## b-menu-item Props

| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------- |
| index     | 唯一标识   | String  | - |
| route     | `Vue Router`的路径数据（`b-menu`启用`route`下有效） | Object | - |
