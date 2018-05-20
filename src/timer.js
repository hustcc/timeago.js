/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { getAttr } from './helper';
import { ATTR_DATA_TID } from './constant'

// 所有的定时器
export const Timers = [];

const clear = tid => {
  if (tid) {
    clearTimeout(tid);
    delete Timers[tid];
  }
};

/**
 * 取消定时器
 * @param node
 */
export const cancel = node => {
  if (node) clear(getAttr(node, ATTR_DATA_TID)); // get the timer of DOM node(native / jq).
  else for (const tid in Timers) clear(tid);
};

/**
 * 开启一个 timer
 * @param func
 * @param delay
 */
export const run = (func, delay) => {
  const tid = setTimeout(function() {
    // 执行目标方法
    func();
    // 从 Timer 中删除
    clear(tid);
  }, delay);

  // there is no need to save node in object. Just save the key
  Timers[tid] = 0;
  return tid;
};
