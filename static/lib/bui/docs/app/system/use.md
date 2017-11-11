## 快速入手【推荐】

本方案是前后端独立运行的方式，前端的灵活度更高，可维护性会更好。

### 安装 node

去官网安装node.js https://nodejs.org

推荐安装 6.x.x版本（如果以前安装过node.js,版本低于6的，建议升级）

安转完node.js后，会默认附带安转npm包管理器

### 项目初始化

1、安装BUI命令行工具

```bash
npm i @bui/cli -g --registry http://10.2.223.167:7001/
```

2、新建文件夹

```bash
mkdir bui-demo && cd ./bui-demo
```

3、初始化项目(两种类型项目可选)

新建目录根目录下运行
```bash
// 多页应用
bui init -t multiple
// 或者 单页应用
bui init -t single
```

4、安装依赖

项目根目录下运行
```bash
npm i --registry http://10.2.223.167:7001/
```

注：如果不想每次下载都带registry 可以全局绑定源
```
npm config set registry http://10.2.223.167:7001/
```

### 项目运行

1、绑定host(项目默认绑定local.beibei.com域名，新建成功后可以按实际情况配置)

```bash
127.0.0.1 local.beibei.com
```

2、项目根目录下执行

```bash
npm run dev
```

3、打开浏览器 http://local.beibei.com:8000/

4、如要开发新页面，请参照项目内的README.md文档

