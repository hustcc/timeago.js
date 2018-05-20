'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.Locales = undefined;

var _constant = require('./constant');

var zh_CN = function zh_CN(number, index) {
  if (index === 0) return ['刚刚', '片刻后'];
  var unit = _constant.IndexMapZH[parseInt(index / 2)];
  return [number + ' ' + unit + '\u524D', number + ' ' + unit + '\u540E'];
}; /**
    * Created by hustcc on 18/5/20.
    * Contract: i@hust.cc
    */

var en = function en(number, index) {
  if (index === 0) return ['just now', 'right now'];
  var unit = _constant.IndexMapEn[parseInt(index / 2)];
  if (number > 1) unit += 's';
  return [number + ' ' + unit + ' ago', 'in ' + number + ' ' + unit];
};

/**
 * 所有的语言
 * @type {{en: function(*, *), zh_CN: function(*, *)}}
 */
var Locales = exports.Locales = {
  en: en,
  zh_CN: zh_CN
};

/**
 * 注册语言
 * @param locale
 * @param func
 */
var register = exports.register = function register(locale, func) {
  Locales[locale] = func;
};