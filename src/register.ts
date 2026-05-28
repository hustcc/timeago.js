/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { LocaleFunc, LocaleMap } from './interface';

/**
 * All supported locales
 */
const Locales: LocaleMap = {};
const DEFAULT_LOCALE = 'en_us';

const normalizeLocale = (locale: string) => locale.toLowerCase();

/**
 * register a locale
 * @param locale
 * @param func
 */
export const register = (locale: string, func: LocaleFunc) => {
  Locales[normalizeLocale(locale)] = func;
};

/**
 * get a locale, default is en_US
 * @param locale
 * @returns {*}
 */
export const getLocale = (locale?: string): LocaleFunc => {
  return Locales[locale ? normalizeLocale(locale) : DEFAULT_LOCALE] || Locales[DEFAULT_LOCALE];
};
