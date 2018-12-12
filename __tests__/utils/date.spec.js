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
} from '../../src/utils/date';

import { getLocale } from '../../src/locales';

describe('date', () => {
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
    expect(diffSec(now)).toBeApproximate(0);
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
    expect(formatDiff(100, getLocale('en'))).toEqual('1 minute ago');
    expect(formatDiff(-1000, getLocale('en'))).toEqual('in 16 minutes');

    expect(formatDiff(-1000, getLocale('en'))).toEqual('in 16 minutes');
    expect(formatDiff(-1000, getLocale('x'))).toEqual('in 16 minutes');
    expect(formatDiff(-1000, getLocale('x'))).toEqual('in 16 minutes');
  });
});
