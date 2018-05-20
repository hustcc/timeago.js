/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */


import { IndexMapEn, IndexMapZH } from './constant';

/**
 * 所有的语言
 * @type {{en: function(*, *), zh_CN: function(*, *)}}
 */
export const Locales = {
  en: (number, index) => {
    if (index === 0) return ['just now', 'right now'];
    let unit = IndexMapEn[parseInt(index / 2)];
    if (number > 1) unit += 's';
    return [`${number} ${unit} ago`, `in ${number} ${unit}`];
  },
  zh_CN: (number, index) => {
    if (index === 0) return ['刚刚', '片刻后'];
    let unit = IndexMapZH[parseInt(index / 2)];
    return [`${number} ${unit}前`, `${number} ${unit}后`];
  },
};

/**
 * 注册语言
 * @param locale
 * @param func
 */
export const register = (locale, func) => {
  Locales[locale] = func;
};
