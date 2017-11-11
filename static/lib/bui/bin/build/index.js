'use strict';
const
  rimraf = require('rimraf'),
  path = require('path'),
  fs = require('fs'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.conf');

const
  themeMode = process.argv.length > 2 ? process.argv[2].trim() : '',//主题处理模式
  buildBasePath = path.join(__dirname, '../../build'),
  themeBasePath = path.join(__dirname, '../../src/less/theme'),
  lessReg = /^(.+)\.less$/,
  wpJobs = [];

const runJobs  = () => {
  if (wpJobs.length === 0) {
    console.log('构建完成');
    return;
  }
  let job = wpJobs.shift();
  console.log('总共构建%d个主题,正在构建第%d个主题,请等待...', themeNums, ++themeIndex);
  job.run((error, stats) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log(stats.toString('errors-only'));
    runJobs();
  });
};

//清空build下文件
rimraf.sync(buildBasePath);

//环境变量
process.env.NODE_ENV = 'production';

//创建webpack任务
if (themeMode === 'all') {
  let files = fs.readdirSync(themeBasePath);
  wpJobs.push(webpack(webpackConfig()));
  files.forEach((val, index) => {
    let matcher = val.match(lessReg);
    if(matcher !== null){
      wpJobs.push(webpack(webpackConfig(matcher[1])));
    }
  });
} else if (themeMode === '') {
  wpJobs.push(webpack(webpackConfig()));
} else {
  wpJobs.push(webpack(webpackConfig(themeMode)));
}

//执行任务
let themeNums = wpJobs.length,themeIndex = 0;
runJobs();

