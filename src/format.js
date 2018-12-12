import {
  formatDiff,
  diffSec,
} from './utils/date';
import { getLocale } from './locales.js';

export const format = (date, locale, nowDate) => {
  // diff seconds
  const sec = diffSec(date, nowDate);
  // format it with locale
  return formatDiff(sec, getLocale(locale));
};
