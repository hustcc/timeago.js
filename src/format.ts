import { formatDiff, diffSec } from './utils/date';
import { getLocale } from './register';
import { Opts, TDate } from './interface';

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
  return formatDiff(sec, getLocale(locale));
};
