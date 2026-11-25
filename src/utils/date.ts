/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { LocaleFunc, TDate } from '../interface';

/**
 * Length of each unit in seconds: second, minute, hour, day, week,
 * month (365 / 12 days) and year (365 days). These are whole numbers, so
 * dividing by them once is exact on a unit boundary.
 */
const UNIT_SEC = [1, 60, 3600, 86400, 604800, 2628000, 31536000];

/**
 * index in UNIT_SEC of the largest unit that fits in the diff
 * @param diff the diff second, not negative
 * @returns
 */
function unitIndex(diff: number): number {
  let idx = 0;
  while (diff >= UNIT_SEC[idx + 1]) idx++;
  return idx;
}

/**
 * format Date / string / timestamp to timestamp
 * @param input
 * @returns {*}
 */
export function toDate(input?: Date | string | number): Date {
  if (input instanceof Date) return input;
  const s = String(input ?? '');
  if (!isNaN(input as number) || /^\d+$/.test(s)) return new Date(parseInt(s));
  // Pull the trailing timezone offset off first so the global `-` -> `/`
  // replacement below cannot eat the offset's minus sign (which previously
  // turned `-04:00` into `/04:00` and produced an Invalid Date).
  let tz = '';
  const normalized = s
    .trim()
    .replace(/([+-]\d\d):?(\d\d)$/, (_m, h, m) => {
      tz = ` ${h}${m}`; // -04:00 -> ' -0400'
      return '';
    })
    .replace(/\.\d+/, '') // remove milliseconds
    .replace(/-/g, '/')
    .replace(/(\d)T(\d)/, '$1 $2')
    .replace(/Z/, ' UTC'); // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
  return new Date(normalized + tz);
}

/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunc
 * @returns
 */
export function formatDiff(diff: number, localeFunc: LocaleFunc): string {
  /**
   * if locale is not exist, use defaultLocale.
   * if defaultLocale is not exist, use build-in `en`.
   * be sure of no error when locale is not exist.
   *
   * If `time in`, then 1
   * If `time ago`, then 0
   */
  const agoIn = diff < 0 ? 1 : 0;

  /**
   * Get absolute value of number (|diff| is non-negative) value of x
   * |diff| = diff if diff is positive
   * |diff| = -diff if diff is negative
   * |0| = 0
   */
  diff = Math.abs(diff);

  /**
   * Time in seconds
   */
  const totalSec = diff;

  /**
   * Unit of time
   */
  let idx = unitIndex(diff);
  diff /= UNIT_SEC[idx];

  /**
   * Math.floor() is alternative of ~~
   *
   * The differences and bugs:
   * Math.floor(3.7) -> 4 but ~~3.7 -> 3
   * Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552
   *
   * More information about the performance of algebraic:
   * https://www.youtube.com/watch?v=65-RbBwZQdU
   */
  diff = Math.floor(diff);

  idx *= 2;

  if (diff > (idx === 0 ? 9 : 1)) idx += 1;

  return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff.toString());
}

/**
 * calculate the diff second between date to be formatted an now date.
 * @param date
 * @param relativeDate
 * @returns {number}
 */
export function diffSec(date: TDate, relativeDate?: TDate): number {
  const relDate = relativeDate ? toDate(relativeDate) : new Date();
  return (+relDate - +toDate(date)) / 1000;
}

/**
 * nextInterval: calculate the next interval time.
 * - diff: the diff sec between now and date to be formatted.
 *
 * What's the meaning?
 * diff = 61 then return 59
 * diff = 3601 (an hour + 1 second), then return 3599
 * make the interval with high performance.
 **/
export function nextInterval(diff: number): number {
  // Use the absolute diff so future times (negative diff) walk the unit
  // buckets too; otherwise the loop is skipped and the result is always 1.
  diff = Math.abs(diff);
  const unit = UNIT_SEC[unitIndex(diff)];
  return Math.ceil(unit - (diff % unit));
}
