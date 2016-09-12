var seconds = formatAndPrint('%s секунду', '%s секунды', '%s секунд'),
  minutes = formatAndPrint('%s минуту', '%s минуты', '%s минут'),
  hours = formatAndPrint('%s час', '%s часа', '%s часов'),
  days = formatAndPrint('%s день', '%s дня', '%s дней'),
  weeks = formatAndPrint('%s неделю', '%s недели', '%s недель'),
  months = formatAndPrint('%s месяц', '%s месяца', '%s месяцев'),
  years = formatAndPrint('%s год', '%s года', '%s лет');

module.exports = function(number, index) {
  return [
    ['только что', 'через несколько секунд'],
    [seconds(number, ' назад'), seconds(number, 'через ', true)],
    ['минуту назад', 'через минуту'],
    [minutes(number, ' назад'), minutes(number, 'через ', true)],
    ['час назад', 'через час'],
    [hours(number, ' назад'), hours(number, 'через ', true)],
    ['вчера', 'завтра'],
    [days(number, ' назад'), days(number, 'через ', true)],
    ['неделю назад', 'через неделю'],
    [weeks(number, ' назад'), weeks(number, 'через ', true)],
    ['месяц назад', 'через месяц'],
    [months(number, ' назад'), months(number, 'через ', true)],
    ['год назад', 'через год'],
    [years(number, ' назад'), years(number, 'через ', true)]
  ][index];
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