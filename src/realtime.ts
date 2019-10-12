import { setTimerId, getTimerId, getDateAttribute } from './utils/dom';
import { formatDiff, diffSec, nextInterval } from './utils/date';
import { getLocale } from './locales';
import { TDate, TimerPool } from './interface';

// all realtime timer
const TIMER_POOL: TimerPool = {};

/**
 * clear a timer from pool
 * @param tid
 */
const clear = (tid: number): void => {
  clearTimeout(tid);
  delete TIMER_POOL[tid];
};

// run with timer(setTimeout)
function run(node: HTMLElement, date, localeFunc, nowDate): void {
  // clear the node's exist timer
  clear(getTimerId(node));

  // get diff seconds
  const diff = diffSec(date, nowDate);
  // render
  node.innerText = formatDiff(diff, localeFunc);

  const tid = (setTimeout(
    () => {
      run(node, date, localeFunc, nowDate);
    },
    nextInterval(diff) * 1000,
    0x7fffffff,
  ) as unknown) as number;

  // there is no need to save node in object. Just save the key
  TIMER_POOL[tid] = 0;
  setTimerId(node, tid);
}

// 取消一个 node 的实时渲染
export function cancel(node?: HTMLElement): void {
  // cancel one
  if (node) clear(getTimerId(node));
  // cancel all
  // @ts-ignore
  else Object.keys(TIMER_POOL).forEach(clear);
}

// 实时渲染一系列节点
export const render = (nodes: HTMLElement | NodeList, locale?: string, relativeDate?: TDate) => {
  // by .length
  const nodeList: NodeList = 'length' in nodes ? nodes : (([nodes] as unknown) as NodeList);

  nodeList.forEach((node: HTMLElement) => {
    run(node, getDateAttribute(node), getLocale(locale), relativeDate);
  });

  return nodeList;
};
