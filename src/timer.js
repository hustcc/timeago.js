/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { getAttr } from './helper';
import { ATTR_DATA_TID } from './constant'

// 所有的定时器
export const Timers = [];

/**
 * 取消定时器
 * @param node
 */
export const cancel = node => {
  let tid;
  // assigning in if statement to save space
  if (node) {
    // 仅仅清空当前节点的 timer
    tid = getAttr(node, ATTR_DATA_TID); // get the timer of DOM node(native / jq).
    if (tid) {
      clearTimeout(tid);
      delete Timers[tid];
    }
  } else {
    // 清空所有的 timer
    for (tid in Timers) clearTimeout(tid);
    timers = {};
  }
};

/**
 * 开启一个 timer
 * @param func
 * @param delay
 */
export const run = (func, delay) => {
  const tid = setTimeout(() => {
    // 执行目标方法
    func();
    // 从 Timer 中删除
    delete Timers[tid];
  }, delay);

  // there is no need to save node in object. Just save the key
  Timers[tid] = 0;
  return tid;
};
