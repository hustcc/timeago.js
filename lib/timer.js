'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = exports.cancel = exports.Timers = undefined;

var _helper = require('./helper');

var _constant = require('./constant');

// 所有的定时器
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

var Timers = exports.Timers = [];

var clear = function clear(tid) {
  if (tid) {
    clearTimeout(tid);
    delete Timers[tid];
  }
};

/**
 * 取消定时器
 * @param node
 */
var cancel = exports.cancel = function cancel(node) {
  if (node) clear((0, _helper.getAttr)(node, _constant.ATTR_DATA_TID)); // get the timer of DOM node(native / jq).
  else for (var tid in Timers) {
      clear(tid);
    }
};

/**
 * 开启一个 timer
 * @param func
 * @param delay
 */
var run = exports.run = function run(func, delay) {
  var tid = setTimeout(function () {
    // 从 Timer 中删除
    clear(tid);
    // 执行目标方法
    func();
  }, delay);

  // there is no need to save node in object. Just save the key
  Timers[tid] = 0;
  return tid;
};