import { toDate, formatDiff, diffSec, nextInterval } from '../../src/utils/date';
import { register, getLocale } from '../../src/register';
import en_US from '../../src/lang/en_US';
import zh_CN from '../../src/lang/zh_CN';

register('en_US', en_US);
register('zh_CN', zh_CN);

describe('date', () => {
  test('toDate', () => {
    expect(toDate('1992-08-01')).toBeInstanceOf(Date);
    expect(toDate(712627200000)).toBeInstanceOf(Date);

    expect(toDate('2017-2-5 3:57:52UTC')).toBeInstanceOf(Date);
    expect(toDate('2017-2-5T3:57:52Z')).toBeInstanceOf(Date);

    expect(toDate()).toBeInstanceOf(Date);
  });

  test('toDate timezone offset', () => {
    // positive offsets already worked
    expect(toDate('2021-01-19T14:23:07+04:00').toISOString()).toEqual(
      '2021-01-19T10:23:07.000Z',
    );
    // negative offsets used to produce an Invalid Date because the global
    // `-` -> `/` replacement ate the offset's minus sign.
    expect(toDate('2021-01-19T14:23:07-04:00').toISOString()).toEqual(
      '2021-01-19T18:23:07.000Z',
    );
    expect(toDate('2021-01-19T14:23:07.418-04:00').toISOString()).toEqual(
      '2021-01-19T18:23:07.000Z',
    );
    expect(toDate('2021-01-19T14:23:07-0530').toISOString()).toEqual(
      '2021-01-19T19:53:07.000Z',
    );
  });

  test('toDate date-only string ending in a dash and digits', () => {
    // the trailing `-2020` is the year, not a timezone offset
    const d = toDate('12-31-2020');
    expect([d.getFullYear(), d.getMonth(), d.getDate()]).toEqual([2020, 11, 31]);
    const d2 = toDate('01-02-2020');
    expect([d2.getFullYear(), d2.getMonth(), d2.getDate()]).toEqual([2020, 0, 2]);
  });

  test('toDate keeps a space before a negative offset', () => {
    const iso = '2021-01-19T18:23:07.000Z';
    expect(toDate('2021-01-19 14:23:07 -04:00').toISOString()).toEqual(iso);
    expect(toDate('2021-01-19 14:23:07 -0400').toISOString()).toEqual(iso);
  });

  test('formatDiff', () => {
    expect(formatDiff(100, getLocale('en_US'))).toEqual('1 minute ago');
    expect(formatDiff(-1000, getLocale('en_US'))).toEqual('in 16 minutes');

    expect(formatDiff(-1000, getLocale('not-exist-locale'))).toEqual('in 16 minutes');

    // Big number test
    expect(formatDiff(-9999999999999999999999, getLocale('en_US'))).toEqual('in 317097919837645 years');
  });

  test('formatDiff on an exact unit boundary', () => {
    const DAY = 24 * 3600;
    const YEAR = 365 * DAY;
    const MONTH = YEAR / 12;
    const en = getLocale('en_US');

    // dividing step by step left these just under the whole number
    expect(formatDiff(3 * YEAR, en)).toEqual('3 years ago');
    expect(formatDiff(5 * YEAR, en)).toEqual('5 years ago');
    expect(formatDiff(10 * YEAR, en)).toEqual('10 years ago');
    expect(formatDiff(-3 * YEAR, en)).toEqual('in 3 years');
    expect(formatDiff(11 * MONTH, en)).toEqual('11 months ago');

    for (let n = 1; n <= 200; n++) {
      expect(formatDiff(n * YEAR, en)).toEqual(n === 1 ? '1 year ago' : `${n} years ago`);
      expect(formatDiff(n * YEAR - 1, en)).not.toEqual(`${n} years ago`);
    }
    for (let n = 2; n <= 11; n++) {
      expect(formatDiff(n * MONTH, en)).toEqual(`${n} months ago`);
    }
    for (let n = 2; n <= 4; n++) {
      expect(formatDiff(n * 7 * DAY, en)).toEqual(`${n} weeks ago`);
    }
  });

  test('diffSec / formatDiff across three years without a leap day', () => {
    // 2021, 2022 and 2023 have no 29 February: exactly 3 * 365 days
    const sec = diffSec('2021-01-01T00:00:00Z', '2024-01-01T00:00:00Z');
    expect(formatDiff(sec, getLocale('en_US'))).toEqual('3 years ago');
  });

  test('diffSec', () => {
    const now = new Date();
    expect(diffSec(now, now)).toBeCloseTo(0, 0);
    expect(diffSec(new Date(+now - 10000), now)).toBeCloseTo(10, 0);
  });

  test('nextInterval', () => {
    expect(nextInterval(1)).toEqual(1);
    expect(nextInterval(30)).toEqual(1);
    expect(nextInterval(110)).toEqual(10);
    expect(nextInterval(2 * 3600 + 100)).toEqual(3500);
    expect(nextInterval(3600 * 24 + 3600)).toEqual(23 * 3600);
    // future times (negative diff) must use the same interval as past times
    expect(nextInterval(-110)).toEqual(10);
    expect(nextInterval(-(2 * 3600 + 100))).toEqual(3500);
    expect(nextInterval(-(3600 * 24 + 3600))).toEqual(23 * 3600);
  });

  test('nextInterval on month and year units', () => {
    expect(nextInterval(4000000)).toEqual(2628000 * 2 - 4000000);
    expect(nextInterval(365 * 24 * 3600)).toEqual(365 * 24 * 3600);
  });

  test('nextInterval of an invalid date is a finite number', () => {
    expect(nextInterval(NaN)).toEqual(1);
    expect(nextInterval(Infinity)).toEqual(365 * 24 * 3600);
  });
});

