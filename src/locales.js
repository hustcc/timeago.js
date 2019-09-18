/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

const EN = 'second_minute_hour_day_week_month_year'.split('_');
const ZH = '秒_分钟_小时_天_周_个月_年'.split('_');
const CO = 'segundo_minuto_hora_dia_semana_mes_año'.split('_');

const zh_CN = (number, index) => {
  if (index === 0) return ['刚刚', '片刻后'];
  const unit = ZH[parseInt(index / 2)];
  return [`${number} ${unit}前`, `${number} ${unit}后`];
};

const en_US = (number, index) => {
  if (index === 0) return ['just now', 'right now'];
  let unit = EN[parseInt(index / 2)];
  if (number > 1) unit += 's';
  return [`${number} ${unit} ago`, `in ${number} ${unit}`];
};

const es_MX = function es_MX(number, index){
  if (index === 0) return['Justo Ahora', 'Ahora mismo'];
  var unit = MX[parseInt(index / 2)];
  if (number > 1 && unit == 'mes'){
     unit += 'es';
  }else if (number > 1) unit += 's';
  return ["".concat("Hace ", number).concat(" ", unit), "En ".concat(number, " ").concat(unit)];
};

/**
 * 所有的语言
 * @type {{en: function(*, *), zh_CN: function(*, *)}}
 */
const Locales = {
  en_US,
  zh_CN,
  es_MX
};

/**
 * 注册语言
 * @param locale
 * @param func
 */
export const register = (locale, func) => {
  Locales[locale] = func;
};

/**
 * 获取语言函数
 * @param locale
 * @returns {*}
 */
export const getLocale = locale => {
  return Locales[locale] || en_US;
};
