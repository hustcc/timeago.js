/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { LocaleFunc, LocaleMap } from './interface';
import en_US from './lang/en_US';
import zh_CN from './lang/zh_CN';

/**
 * All locales supported. en_US, zh_CN is build-in
 * @type {{en: function(*, *), zh_CN: function(*, *)}}
 */
const Locales: LocaleMap = {
  en_US,
  zh_CN,
};

/**
 * register a locale
 * @param locale
 * @param func
 */
export const register = (locale: string, func: LocaleFunc) => {
  Locales[locale] = func;
};

/**
 * get a locale, default is en_US
 * @param locale
 * @returns {*}
 */
export const getLocale = (locale) => {
  return Locales[locale] || en_US;
};
