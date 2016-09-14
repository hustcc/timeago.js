var seconds = formatNum.bind(null, 'секунду', '%s секунду', '%s секунди', '%s секунд'),
  minutes = formatNum.bind(null, 'хвилин', '%s хвилину', '%s хвилину', '%s хвилин'),
  hours = formatNum.bind(null, 'годину', '%s годину', '%s годин', '%s годин'),
  days = formatNum.bind(null, 'день', '%s день', '%s дня', '%s днів'),
  weeks = formatNum.bind(null, 'тиждень', '%s тиждень', '%s тижднів', '%s тижднів'),
  months = formatNum.bind(null, 'місяць', '%s місяць', '%s місяця', '%s місяців'),
  years = formatNum.bind(null, 'рік', '%s рік', '%s рока', '%s років');

module.exports = function(number, index) {
  switch(index) {
    case 0: return ['щойно', 'через декілька секунд'];
    case 1: return [seconds(number) + ' назад', 'через ' + seconds(number)];
    case 2: // ['хвилину назад', 'через хвилину'];
    case 3: return [minutes(number) + ' назад', 'через ' + minutes(number)];
    case 4: // ['годину назад', 'через годину'];
    case 5: return [hours(number) + ' назад', 'через ' + hours(number)];
    case 6: return ['вчора', 'завтра'];
    case 7: return [days(number) + ' назад', 'через ' + days(number)];
    case 8: // ['тиждень назад', 'через тиждень'];
    case 9: return [weeks(number) + ' назад', 'через ' + weeks(number)];
    case 10: // ['місяць назад', 'через місяць'];
    case 11: return [months(number) + ' назад', 'через ' + months(number)];
    case 12: // ['рік назад', 'через рік'];
    case 13: return [years(number) + ' назад', 'через ' + years(number)];
    default: return ['', '']
  }
};

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
