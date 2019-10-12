/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { toDate, formatDiff, diffSec, nextInterval } from '../../src/utils/date';

import { getLocale } from '../../src/locales';

describe('date', () => {
  // TODO fill all test cases
  test('toDate', () => {
    expect(typeof toDate('1992-08-01')).toEqual('number');
    expect(typeof toDate(712627200000)).toEqual('number');

    expect(typeof toDate('2017-2-5 3:57:52UTC')).toEqual('number');
    expect(typeof toDate('2017-2-5T3:57:52Z')).toEqual('number');

    expect(typeof toDate()).toEqual('number');
  });

  test('diffSec', () => {
    const now = new Date();
    // @ts-ignore
    expect(diffSec(now)).toBeApproximate(0);
    // @ts-ignore
    expect(diffSec(now, now)).toBeApproximate(0);
    // @ts-ignore
    expect(diffSec(new Date(+now - 10000), now)).toBeApproximate(10);
  });

  test('nextInterval', () => {
    expect(nextInterval(1)).toEqual(1); // sec
    expect(nextInterval(30)).toEqual(1); // sec

    expect(nextInterval(110)).toEqual(10); // minute

    expect(nextInterval(2 * 3600 + 100)).toEqual(3500); // hour

    expect(nextInterval(3600 * 24 + 3600)).toEqual(23 * 3600); // day
  });

  test('formatDiff', () => {
    expect(formatDiff(100, getLocale('en'))).toEqual('1 minute ago');
    expect(formatDiff(-1000, getLocale('en'))).toEqual('in 16 minutes');

    expect(formatDiff(-1000, getLocale('en'))).toEqual('in 16 minutes');
    expect(formatDiff(-1000, getLocale('x'))).toEqual('in 16 minutes');
    expect(formatDiff(-1000, getLocale('x'))).toEqual('in 16 minutes');
  });
});
