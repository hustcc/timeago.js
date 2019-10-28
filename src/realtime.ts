import { setTimerId, getTimerId, getDateAttribute } from './utils/dom';
import { formatDiff, diffSec, nextInterval } from './utils/date';
import { getLocale } from './register';
import { LocaleFunc, Opts, TimerPool } from './interface';

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
function run(node: HTMLElement, date: string, localeFunc: LocaleFunc, opts: Opts): void {
  // clear the node's exist timer
  clear(getTimerId(node));

  const { relativeDate, minInterval } = opts;

  // get diff seconds
  const diff = diffSec(date, relativeDate);
  // render
  node.innerText = formatDiff(diff, localeFunc);

  const tid = (setTimeout(() => {
    run(node, date, localeFunc, opts);
  }, Math.min(Math.max(nextInterval(diff), minInterval || 1) * 1000, 0x7fffffff)) as unknown) as number;

  // there is no need to save node in object. Just save the key
  TIMER_POOL[tid] = 0;
  setTimerId(node, tid);
}

/**
 * cancel a timer or all timers
 * @param node - node hosting the time string
 */
export function cancel(node?: HTMLElement): void {
  // cancel one
  if (node) clear(getTimerId(node));
  // cancel all
  // @ts-ignore
  else Object.keys(TIMER_POOL).forEach(clear);
}

/**
 * render a dom realtime
 * @param nodes
 * @param locale
 * @param opts
 */
export function render(nodes: HTMLElement | HTMLElement[] | NodeList, locale?: string, opts?: Opts) {
  // by .length
  // @ts-ignore
  const nodeList: HTMLElement[] = nodes.length ? nodes : [nodes];

  nodeList.forEach((node: HTMLElement) => {
    run(node, getDateAttribute(node), getLocale(locale), opts || {});
  });

  return nodeList;
}
