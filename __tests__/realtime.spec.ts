import { render, cancel } from '../src/';
import { createTimeNode, delay } from './helper';

const now = +new Date();

const time1 = createTimeNode();
const time2 = createTimeNode();
time1.setAttribute('datetime', now - 15000 + '');
time2.setAttribute('datetime', now - 20000 + '');

describe('realtime', () => {
  test('render arrays and NodeLists', () => {
    const arrayNodes = [createTimeNode(+new Date() - 5000), createTimeNode(+new Date() - 5000)];
    const container = document.createElement('div');
    const listNodes = [createTimeNode(+new Date() - 5000), createTimeNode(+new Date() - 5000)];
    listNodes.forEach((node) => container.appendChild(node));
    const nodeList = container.querySelectorAll('time');

    expect(render(arrayNodes, 'en_US')).toEqual(arrayNodes);
    expect(render(nodeList, 'en_US')).toEqual(listNodes);
    expect(arrayNodes.every((node) => node.innerText.length > 0)).toBe(true);
    expect(listNodes.every((node) => node.innerText.length > 0)).toBe(true);
    cancel();
  });

  test('render', async () => {
    render(time1, 'en_US');
    render(time2, 'zh_CN');

    await delay(2500);

    expect(time1.innerText).toBe('17 seconds ago');
    expect(time2.innerText).toBe('22 秒前');
  }, 10000);

  test('cancel', async () => {
    // cancel one
    cancel(time1);
    // cancel all
    cancel();

    await delay(2500);

    expect(time1.innerText).toBe('17 seconds ago');
    expect(time2.innerText).toBe('22 秒前');
  }, 10000);
});
