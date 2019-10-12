import { formatDiff, diffSec } from './utils/date';
import { getLocale } from './locales';
import { TDate } from './interface';

export const format = (date: TDate, locale?: string, relativeDate?: TDate): string => {
  // diff seconds
  const sec = diffSec(date, relativeDate);
  // format it with locale
  return formatDiff(sec, getLocale(locale));
};
