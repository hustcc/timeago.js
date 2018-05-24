/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import {
  toInt,
  toDate,
  formatDiff,
  diffSec,
  nextInterval,
  getAttr,
  getDateAttr,
  setTidAttr,
} from '../src/helper';

describe('helper', () => {
  test('toInt', () => {
    expect(toInt('a')).toBeNaN();
  });

  // TODO fill all test cases
  test('toDate', () => {
    expect(toDate('1992-08-01') instanceof Date).toEqual(true);
    expect(toDate(712627200000) instanceof Date).toEqual(true);

    expect(toDate('2017-2-5 3:57:52UTC') instanceof Date).toEqual(true);
    expect(toDate('2017-2-5T3:57:52Z') instanceof Date).toEqual(true);

    expect(toDate() instanceof Date).toEqual(true);
  });

  test('diffSec', () => {
    const now = new Date();
    expect(diffSec(now, now)).toBeApproximate(0);
    expect(diffSec(new Date(now - 10000), now)).toBeApproximate(10);
  });

  test('nextInterval', () => {
    expect(nextInterval(1)).toEqual(1); // sec
    expect(nextInterval(30)).toEqual(1); // sec

    expect(nextInterval(110)).toEqual(10); // minute

    expect(nextInterval(2 * 3600 + 100)).toEqual(3500); // hour

    expect(nextInterval(3600 * 24 + 3600)).toEqual(23 * 3600); // day
  });

  test('formatDiff', () => {
    expect(formatDiff(100, 'en')).toEqual('1 minute ago');
    expect(formatDiff(-1000, 'en')).toEqual('in 16 minutes');

    expect(formatDiff(-1000, 'en', 'zh_CN')).toEqual('in 16 minutes');
    expect(formatDiff(-1000, 'x', 'en')).toEqual('in 16 minutes');
    expect(formatDiff(-1000, 'x', 'y')).toEqual('in 16 minutes');

    expect(formatDiff(8)).toEqual('just now');
  });

  test('getAttr', () => {
    const node = {
      getAttribute: name => `${name}-native`,
    };

    const jqNode = {
      attr: name => `${name}-jq`,
    };
    expect(getAttr(node, 'name')).toEqual('name-native');

    expect(getAttr(jqNode, 'name')).toEqual('name-jq');

    expect(getAttr({}, 'name')).toEqual(undefined);
  });

  test('getDateAttr', () => {
    const node1 = {
      getAttribute: name => {
        if (name === 'data-timeago') return 'data-timeago-value';
        else if (name === 'datetime') return 'datetime-value';
      },
    };

    const node2 = {
      getAttribute: name => {
        if (name === 'data-timeago') return undefined;
        else if (name === 'datetime') return 'datetime-value';
      },
    };

    const node3 = {
      getAttribute: name => {
        if (name === 'data-timeago') return undefined;
        else if (name === 'datetime') return undefined;
      },
    };

    expect(getDateAttr(node1)).toEqual('data-timeago-value');
    expect(getDateAttr(node2)).toEqual('datetime-value');
    expect(getDateAttr(node3)).toEqual(undefined);
  });

  test('setTidAttr', () => {
    const node1 = {
      setAttribute: jest.fn(),
    };

    const node2 = {
      attr: jest.fn(),
    };

    setTidAttr({}, 0);
    setTidAttr(node1, 1);
    setTidAttr(node2, 2);

    expect(node1.setAttribute).toBeCalledWith('data-tid', 1);
    expect(node2.attr).toBeCalledWith('data-tid', 2);
  });
});
