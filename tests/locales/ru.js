module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'только что');
  t.equal(tb.subSeconds(10), '10 секунд назад');
  t.equal(tb.subSeconds(21), '21 секунду назад');
  t.equal(tb.subSeconds(22), '22 секунды назад');
  t.equal(tb.addSeconds(1), 'через несколько секунд');
  t.equal(tb.addSeconds(10), 'через 10 секунд');
  t.equal(tb.addSeconds(21), 'через 21 секунду');
  t.equal(tb.addSeconds(22), 'через 22 секунды');

  // test minute
  t.equal(tb.subMinutes(1), 'минуту назад');
  t.equal(tb.subMinutes(2), '2 минуты назад');
  t.equal(tb.subMinutes(5), '5 минут назад');
  t.equal(tb.subMinutes(21), '21 минуту назад');
  t.equal(tb.addMinutes(1), 'через минуту');
  t.equal(tb.addMinutes(2), 'через 2 минуты');
  t.equal(tb.addMinutes(5), 'через 5 минут');
  t.equal(tb.addMinutes(21), 'через 21 минуту');

  // test hour
  t.equal(tb.subHours(1), 'час назад');
  t.equal(tb.subHours(2), '2 часа назад');
  t.equal(tb.subHours(5), '5 часов назад');
  t.equal(tb.subHours(21), '21 час назад');
  t.equal(tb.addHours(1), 'через час');
  t.equal(tb.addHours(2), 'через 2 часа');
  t.equal(tb.addHours(5), 'через 5 часов');
  t.equal(tb.addHours(21), 'через 21 час');

  // test day
  t.equal(tb.subDays(1), 'вчера');
  t.equal(tb.subDays(2), '2 дня назад');
  t.equal(tb.subDays(5), '5 дней назад');
  t.equal(tb.addDays(1), 'завтра');
  t.equal(tb.addDays(2), 'через 2 дня');
  t.equal(tb.addDays(5), 'через 5 дней');

  // test week
  t.equal(tb.subWeeks(1), 'неделю назад');
  t.equal(tb.subWeeks(2), '2 недели назад');
  t.equal(tb.addWeeks(1), 'через неделю');
  t.equal(tb.addWeeks(2), 'через 2 недели');

  // test month
  t.equal(tb.subMonths(1), 'месяц назад');
  t.equal(tb.subMonths(2), '2 месяца назад');
  t.equal(tb.subMonths(5), '5 месяцев назад');
  t.equal(tb.addMonths(1), 'через месяц');
  t.equal(tb.addMonths(2), 'через 2 месяца');
  t.equal(tb.addMonths(5), 'через 5 месяцев');

  // test year
  t.equal(tb.subYears(1), 'год назад');
  t.equal(tb.subYears(2), '2 года назад');
  t.equal(tb.subYears(5), '5 лет назад');
  t.equal(tb.sub({years: 19, months: 24}), '21 год назад'); // 21 years ago
  t.equal(tb.addYears(1), 'через год');
  t.equal(tb.addYears(2), 'через 2 года');
  t.equal(tb.addYears(5), 'через 5 лет');
  t.equal(tb.add({years: 20, months: 12}), 'через 21 год'); // in 21 years
};
