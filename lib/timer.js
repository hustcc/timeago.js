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

/**
 * 取消定时器
 * @param node
 */
var cancel = exports.cancel = function cancel(node) {
  var tid = void 0;
  // assigning in if statement to save space
  if (node) {
    // 仅仅清空当前节点的 timer
    tid = (0, _helper.getAttr)(node, _constant.ATTR_DATA_TID); // get the timer of DOM node(native / jq).
    if (tid) {
      clearTimeout(tid);
      delete Timers[tid];
    }
  } else {
    // 清空所有的 timer
    for (tid in Timers) {
      clearTimeout(tid);
    }timers = {};
  }
};

/**
 * 开启一个 timer
 * @param func
 * @param delay
 */
var run = exports.run = function run(func, delay) {
  var tid = setTimeout(function () {
    // 执行目标方法
    func();
    // 从 Timer 中删除
    delete Timers[tid];
  }, delay);

  // there is no need to save node in object. Just save the key
  Timers[tid] = 0;
  return tid;
};