module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'малопре');
  t.equal(tb.subSeconds(10),  'пре 10 секунди');
  t.equal(tb.subSeconds(21), 'пре 21 секунд');
  t.equal(tb.subSeconds(22), 'пре 22 секунде');
  t.equal(tb.addSeconds(1), 'управо сад');
  t.equal(tb.addSeconds(10), 'за 10 секунди');
  t.equal(tb.addSeconds(21), 'за 21 секунд');
  t.equal(tb.addSeconds(22), 'за 22 секунде');

  // test minute
  t.equal(tb.subMinutes(1), 'пре 1 минут');
  t.equal(tb.subMinutes(2), 'пре 2 минуте');
  t.equal(tb.subMinutes(5), 'пре 5 минута');
  t.equal(tb.subMinutes(21), 'пре 21 минут');
  t.equal(tb.addMinutes(1), 'за 1 минут');
  t.equal(tb.addMinutes(2), 'за 2 минуте');
  t.equal(tb.addMinutes(5), 'за 5 минута');
  t.equal(tb.addMinutes(21), 'за 21 минут');

  // test hour
  t.equal(tb.subHours(1), 'пре сат времена');
  t.equal(tb.subHours(2), 'пре 2 сата');
  t.equal(tb.subHours(5), 'пре 5 сати');
  t.equal(tb.subHours(21), 'пре 21 сат');
  t.equal(tb.addHours(1), 'за сат времена');
  t.equal(tb.addHours(2), 'за 2 сата');
  t.equal(tb.addHours(5), 'за 5 сати');
  t.equal(tb.addHours(21), 'за 21 сат');

  // test day
  t.equal(tb.subDays(1), 'пре 1 дан');
  t.equal(tb.subDays(2), 'пре 2 дана');
  t.equal(tb.subDays(5), 'пре 5 дана');
  t.equal(tb.addDays(1), 'за 1 дан');
  t.equal(tb.addDays(2), 'за 2 дана');
  t.equal(tb.addDays(5), 'за 5 дана');

  // test week
  t.equal(tb.subWeeks(1), 'пре недељу дана');
  t.equal(tb.subWeeks(2), 'пре 2 недеље');
  t.equal(tb.addWeeks(1), 'за недељу дана');
  t.equal(tb.addWeeks(2), 'за 2 недеље');

  // test month
  t.equal(tb.subMonths(1), 'пре месец дана');
  t.equal(tb.subMonths(2), 'пре 2 месеца');
  t.equal(tb.subMonths(5), 'пре 5 месеци');
  t.equal(tb.addMonths(1), 'за месец дана');
  t.equal(tb.addMonths(2), 'за 2 месеца');
  t.equal(tb.addMonths(5), 'за 5 месеци');

  // test year
  t.equal(tb.subYears(1), 'пре годину дана');
  t.equal(tb.subYears(2), 'пре 2 године');
  t.equal(tb.subYears(5), 'пре 5 година');
  t.equal(tb.subYears(21), 'пре 21 годину');
  t.equal(tb.addYears(1), 'за годину дана');
  t.equal(tb.addYears(2), 'за 2 године');
  t.equal(tb.addYears(5), 'за 5 година');
  t.equal(tb.addYears(21), 'за 21 годину');
};
