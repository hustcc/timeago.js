import { saveTimerId, getTimerId, getDateAttribute } from './utils/dom';
import { formatDiff, diffSec, nextInterval } from './utils/date';
import { getLocale } from './locales';

// 所有的 timer
const TimerPool = {};

const clear = tid => {
  clearTimeout(tid);
  delete TimerPool[tid];
};

// 定时运行
const run = (node, date, localeFunc, nowDate) => {
  // 先清理掉之前的
  clear(getTimerId(node));

  // get diff seconds
  const diff = diffSec(date, nowDate);
  // render
  node.innerText = formatDiff(diff, localeFunc);

  const tid = setTimeout(() => {
    run(node, date, localeFunc, nowDate);
  }, nextInterval(diff) * 1000, 0x7FFFFFFF);

  // there is no need to save node in object. Just save the key
  TimerPool[tid] = 0;
  saveTimerId(node, tid);
};

// 取消一个 node 的实时渲染
export const cancel = node => {
  if (node) clear(getTimerId(node)); // get the timer of DOM node(native / jq).
  else for (const tid in TimerPool) clear(tid);
};

// 实时渲染一系列节点
export const render = (nodes, locale, nowDate) => {
  // by .length
  if (nodes.length === undefined) nodes = [nodes];

  let node;
  for (let i = 0; i < nodes.length; i ++) {
    node = nodes[i];

    const date = getDateAttribute(node);
    const localeFunc = getLocale(locale);
    run(node, date, localeFunc, nowDate);
  }

  return nodes;
};

