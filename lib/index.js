'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TimeAgo = require('./TimeAgo');

var _locales = require('./locales');

var _timer = require('./timer');

// 入口函数
var factory = function factory(nowDate, locale) {
  return new _TimeAgo.TimeAgo(nowDate, locale);
};

/**
 * 注册语言
 */
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

factory.register = _locales.register;

/**
 * 终止定时器
 */
factory.cancel = _timer.cancel;

exports.default = factory;
module.exports = exports['default'];