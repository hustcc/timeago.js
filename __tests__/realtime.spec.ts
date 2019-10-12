/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { render, cancel } from '../src/';

const now = +new Date();

/**
 * 创建一个 time 节点
 */
function createTimeNode(): HTMLElement {
  const time = document.createElement('time');
  document.body.append(time);

  return time;
}

function delay(ms = 1100) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

const time1 = createTimeNode();
const time2 = createTimeNode();
time1.setAttribute('datetime', now - 15000 + '');
time2.setAttribute('datetime', now - 20000 + '');

describe('realtime', () => {
  test('render', () => {
    render(time1, 'en_US', { relativeDate: now });
    render(time2, 'zh_CN', { relativeDate: now });

    delay(2100);

    expect(time1.innerText).toBe('15 seconds ago');
    expect(time2.innerText).toBe('20 秒前');
  });

  test('cancel', () => {
    // cancel one
    cancel(time1);
    // cancel all
    cancel();

    delay(2100);
    expect(time1.innerText).toBe('15 seconds ago');
    expect(time2.innerText).toBe('20 秒前');
  });
});
