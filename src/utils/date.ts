/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { LocaleFunc, TDate } from '../interface';

const SEC_ARRAY = [60, 60, 24, 7, 365 / 7 / 12, 12];

/**
 * format Date / string / timestamp to timestamp
 * @param input
 * @returns {*}
 */
export function toDate(input?: Date | string | number): Date {
  if (input instanceof Date) return input;
  // @ts-ignore
  if (!isNaN(input) || /^\d+$/.test(input)) return new Date(parseInt(input));
  input = (input || '')
    // @ts-ignore
    .trim()
    .replace(/\.\d+/, '') // remove milliseconds
    .replace(/-/, '/')
    .replace(/-/, '/')
    .replace(/(\d)T(\d)/, '$1 $2')
    .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
    .replace(/([+-]\d\d):?(\d\d)/, ' $1$2'); // -04:00 -> -0400
  return new Date(input);
}

/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunc
 * @returns
 */
export function formatDiff(diff: number, localeFunc: LocaleFunc): string {
  // if locale is not exist, use defaultLocale.
  // if defaultLocale is not exist, use build-in `en`.
  // be sure of no error when locale is not exist.
  const agoIn = diff < 0 ? 1 : 0; // time in or time ago

  diff = Math.abs(diff);
  const totalSec = diff;

  let idx = 0;

  for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) {
    diff /= SEC_ARRAY[idx];
  }
  // Math.floor
  diff = ~~diff;
  idx *= 2;

  if (diff > (idx === 0 ? 9 : 1)) idx += 1;
  // @ts-ignore
  return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff);
}

/**
 * calculate the diff second between date to be formatted an now date.
 * @param date
 * @param relativeDate
 * @returns
 */
export function diffSec(date: TDate, relativeDate: TDate): number {
  relativeDate = relativeDate ? toDate(relativeDate) : new Date();
  return (+relativeDate - +toDate(date)) / 1000;
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
  let rst = 1,
    i = 0,
    d = Math.abs(diff);
  for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {
    diff /= SEC_ARRAY[i];
    rst *= SEC_ARRAY[i];
  }
  d = d % rst;
  d = d ? rst - d : rst;
  return Math.ceil(d);
}
