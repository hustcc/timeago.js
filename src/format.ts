import { Opts, TDate } from './interface';
import { getLocale } from './register';
import { diffSec, formatDiff } from './utils/date';

/**
 * format a TDate into string
 * @param date
 * @param locale
 * @param opts
 */
export const format = (date: TDate, locale?: string, opts?: Opts): string => {
  // diff seconds
  const sec = diffSec(date, opts && opts.relativeDate);
  // format it with locale
  return formatDiff(sec, getLocale(locale), opts?.numberLocale);
};
