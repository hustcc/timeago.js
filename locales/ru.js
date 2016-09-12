var seconds = formatAndPrint('секунду', '%s секунду', '%s секунды', '%s секунд'),
  minutes = formatAndPrint('минуту', '%s минуту', '%s минуты', '%s минут'),
  hours = formatAndPrint('час', '%s час', '%s часа', '%s часов'),
  days = formatAndPrint('день', '%s день', '%s дня', '%s дней'),
  weeks = formatAndPrint('неделю', '%s неделю', '%s недели', '%s недель'),
  months = formatAndPrint('месяц', '%s месяц', '%s месяца', '%s месяцев'),
  years = formatAndPrint('год', '%s год', '%s года', '%s лет');

module.exports = function(number, index) {
  switch(index) {
    case 0: return ['только что', 'через несколько секунд'];
    case 1: return [seconds(number, ' назад'), seconds(number, 'через ', true)];
    case 2: // ['минуту назад', 'через минуту'];
    case 3: return [minutes(number, ' назад'), minutes(number, 'через ', true)];
    case 4: // ['час назад', 'через час'];
    case 5: return [hours(number, ' назад'), hours(number, 'через ', true)];
    case 6: return ['вчера', 'завтра'];
    case 7: return [days(number, ' назад'), days(number, 'через ', true)];
    case 8: // ['неделю назад', 'через неделю'];
    case 9: return [weeks(number, ' назад'), weeks(number, 'через ', true)];
    case 10: // ['месяц назад', 'через месяц'];
    case 11: return [months(number, ' назад'), months(number, 'через ', true)];
    case 12: // ['год назад', 'через год'];
    case 13: return [years(number, ' назад'), years(number, 'через ', true)];
    default: return ['', '']
  }
};

function formatAndPrint(f1, f, s, t) {
  return function(n, addition, isBefore) {
    return addStr(formatNum(f1, f, s, t, n), addition, isBefore);
  }
}

/**
 *
 * @param f1 - 1
 * @param f - 21, 31, ...
 * @param s - 2-4, 22-24, 32-34 ...
 * @param t - 5-20, 25-30, ...
 * @param n
 * @returns {string}
 */
function formatNum(f1, f, s, t, n) {
  var n10 = n % 10,
    str = t;

  if (n === 1) {
    str = f1;
  } else if (n10 === 1 && n > 20) {
    str = f;
  } else if (n10 > 1 && n10 < 5 && (n > 20 || n < 10)) {
    str = s;
  }
  
  return str;
}

function addStr(source, addition, isBefore) {
  addition = addition || '';

  return isBefore ? (addition + source) : (source + addition);
}