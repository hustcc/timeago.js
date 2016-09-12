var seconds = formatAndPrint('%s секунду', '%s секунды', '%s секунд'),
  minutes = formatAndPrint('%s минуту', '%s минуты', '%s минут'),
  hours = formatAndPrint('%s час', '%s часа', '%s часов'),
  days = formatAndPrint('%s день', '%s дня', '%s дней'),
  weeks = formatAndPrint('%s неделю', '%s недели', '%s недель'),
  months = formatAndPrint('%s месяц', '%s месяца', '%s месяцев'),
  years = formatAndPrint('%s год', '%s года', '%s лет');

module.exports = function(number, index) {
  switch(index) {
    case 0: return ['только что', 'через несколько секунд'];
    case 1: return [seconds(number, ' назад'), seconds(number, 'через ', true)];
    case 2: return ['минуту назад', 'через минуту'];
    case 3: return [minutes(number, ' назад'), minutes(number, 'через ', true)];
    case 4: return ['час назад', 'через час'];
    case 5: return [hours(number, ' назад'), hours(number, 'через ', true)];
    case 6: return ['вчера', 'завтра'];
    case 7: return [days(number, ' назад'), days(number, 'через ', true)];
    case 8: return ['неделю назад', 'через неделю'];
    case 9: return [weeks(number, ' назад'), weeks(number, 'через ', true)];
    case 10: return ['месяц назад', 'через месяц'];
    case 11: return [months(number, ' назад'), months(number, 'через ', true)];
    case 12: return ['год назад', 'через год'];
    case 13: return [years(number, ' назад'), years(number, 'через ', true)];
    default: return ['', '']
  }
};

function formatAndPrint(f, s, t) {
  return function(n, addition, isBefore) {
    return addStr(formatNum(f, s, t, n), addition, isBefore);
  }
}

function formatNum(f, s, t, n) {
  var n10 = n % 10,
    str = t;

  if (n10 === 1 && (n === 1 || n > 20)) {
    str = f;
  }

  if (n10 > 1 && n10 < 5 && (n > 20 || n < 10)) {
    str = s;
  }
  
  return str;
}

function addStr(source, addition, isBefore) {
  addition = addition || '';

  return isBefore ? (addition + source) : (source + addition);
}