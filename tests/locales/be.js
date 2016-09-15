module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'толькі што');
  t.equal(tb.subSeconds(10), '10 секунд таму');
  t.equal(tb.subSeconds(21), '21 секунду таму');
  t.equal(tb.subSeconds(22), '22 секунды таму');
  t.equal(tb.addSeconds(1), 'праз некалькі секунд');
  t.equal(tb.addSeconds(10), 'праз 10 секунд');
  t.equal(tb.addSeconds(21), 'праз 21 секунду');
  t.equal(tb.addSeconds(22), 'праз 22 секунды');

  // test minute
  t.equal(tb.subMinutes(1), 'хвіліну таму');
  t.equal(tb.subMinutes(2), '2 хвіліны таму');
  t.equal(tb.subMinutes(5), '5 хвілін таму');
  t.equal(tb.subMinutes(21), '21 хвіліну таму');
  t.equal(tb.addMinutes(1), 'праз хвіліну');
  t.equal(tb.addMinutes(2), 'праз 2 хвіліны');
  t.equal(tb.addMinutes(5), 'праз 5 хвілін');
  t.equal(tb.addMinutes(21), 'праз 21 хвіліну');

  // test hour
  t.equal(tb.subHours(1), 'гадзіну таму');
  t.equal(tb.subHours(2), '2 гадзіны таму');
  t.equal(tb.subHours(5), '5 гадзін таму');
  t.equal(tb.subHours(21), '21 гадзіну таму');
  t.equal(tb.addHours(1), 'праз гадзіну');
  t.equal(tb.addHours(2), 'праз 2 гадзіны');
  t.equal(tb.addHours(5), 'праз 5 гадзін');
  t.equal(tb.addHours(21), 'праз 21 гадзіну');

  // test day
  t.equal(tb.subDays(1), 'дзень таму');
  t.equal(tb.subDays(2), '2 дні таму');
  t.equal(tb.subDays(5), '5 дзён таму');
  t.equal(tb.addDays(1), 'праз дзень');
  t.equal(tb.addDays(2), 'праз 2 дні');
  t.equal(tb.addDays(5), 'праз 5 дзён');

  // test week
  t.equal(tb.subWeeks(1), 'тыдзень таму');
  t.equal(tb.subWeeks(2), '2 тыдні таму');
  t.equal(tb.addWeeks(1), 'праз тыдзень');
  t.equal(tb.addWeeks(2), 'праз 2 тыдні');

  // test month
  t.equal(tb.subMonths(1), 'месяц таму');
  t.equal(tb.subMonths(2), '2 месяцы таму');
  t.equal(tb.subMonths(5), '5 месяцаў таму');
  t.equal(tb.addMonths(1), 'праз месяц');
  t.equal(tb.addMonths(2), 'праз 2 месяцы');
  t.equal(tb.addMonths(5), 'праз 5 месяцаў');

  // test year
  t.equal(tb.subYears(1), 'год таму');
  t.equal(tb.subYears(2), '2 гады таму');
  t.equal(tb.subYears(5), '5 гадоў таму');
  t.equal(tb.subYears(21), '21 год таму');
  t.equal(tb.addYears(1), 'праз год');
  t.equal(tb.addYears(2), 'праз 2 гады');
  t.equal(tb.addYears(5), 'праз 5 гадоў');
  t.equal(tb.addYears(21), 'праз 21 год');
};
