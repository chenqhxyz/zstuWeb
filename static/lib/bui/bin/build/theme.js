'use strict';

const
  path = require('path'),
  fs = require('fs'),
  lessVarsToJs = require('less-vars-to-js');

let lessPath;

const getModifyVars = (themeValue) => {
  if (typeof themeValue !== 'string' || themeValue.trim().length === 0) {
    return {};
  }

  lessPath = path.join(__dirname, '../../src/less/theme', './' + themeValue + '.less');

  if (fs.existsSync(lessPath)) {
    return lessVarsToJs(fs.readFileSync(lessPath, 'utf-8'));
  } else {
    throw new Error('主题文件不存在 ' + lessPath);
  }
};

module.exports = {
  getModifyVars: getModifyVars
};

