/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { render, cancel } from '../src/';
import { createTimeNode, delay } from './helper';

const now = +new Date();

const time1 = createTimeNode();
const time2 = createTimeNode();
time1.setAttribute('datetime', now - 15000 + '');
time2.setAttribute('datetime', now - 20000 + '');

describe('realtime', () => {
  test('render', async () => {
    render(time1, 'en_US');
    render(time2, 'zh_CN');

    await delay(2500);

    expect(time1.innerText).toBe('17 seconds ago');
    expect(time2.innerText).toBe('22 秒前');
  });

  test('cancel', async () => {
    // cancel one
    cancel(time1);
    // cancel all
    cancel();

    await delay(2500);

    expect(time1.innerText).toBe('17 seconds ago');
    expect(time2.innerText).toBe('22 秒前');
  });
});
