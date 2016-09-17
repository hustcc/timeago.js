module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'току що');
  t.equal(tb.subSeconds(10), 'преди 10 секунди');
  t.equal(tb.subSeconds(21), 'преди 21 секунди');
  t.equal(tb.subSeconds(22), 'преди 22 секунди');
  t.equal(tb.addSeconds(1), 'съвсем скоро');
  t.equal(tb.addSeconds(10), 'след 10 секунди');
  t.equal(tb.addSeconds(21), 'след 21 секунди');
  t.equal(tb.addSeconds(22), 'след 22 секунди');

  // test minute
  t.equal(tb.subMinutes(1), 'преди 1 минута');
  t.equal(tb.subMinutes(2), 'преди 2 минути');
  t.equal(tb.subMinutes(5), 'преди 5 минути');
  t.equal(tb.subMinutes(21), 'преди 21 минути');
  t.equal(tb.addMinutes(1), 'след 1 минута');
  t.equal(tb.addMinutes(2), 'след 2 минути');
  t.equal(tb.addMinutes(5), 'след 5 минути');
  t.equal(tb.addMinutes(21), 'след 21 минути');

  // test hour
  t.equal(tb.subHours(1), 'преди 1 час');
  t.equal(tb.subHours(2), 'преди 2 часа');
  t.equal(tb.subHours(5), 'преди 5 часа');
  t.equal(tb.subHours(21), 'преди 21 часа');
  t.equal(tb.addHours(1), 'след 1 час');
  t.equal(tb.addHours(2), 'след 2 часа');
  t.equal(tb.addHours(5), 'след 5 часа');
  t.equal(tb.addHours(21), 'след 21 часа');

  // test day
  t.equal(tb.subDays(1), 'преди 1 ден');
  t.equal(tb.subDays(2), 'преди 2 дни');
  t.equal(tb.subDays(5), 'преди 5 дни');
  t.equal(tb.addDays(1), 'след 1 ден');
  t.equal(tb.addDays(2), 'след 2 дни');
  t.equal(tb.addDays(5), 'след 5 дни');

  // test week
  t.equal(tb.subWeeks(1), 'преди 1 седмица');
  t.equal(tb.subWeeks(2), 'преди 2 седмици');
  t.equal(tb.addWeeks(1), 'след 1 седмица');
  t.equal(tb.addWeeks(2), 'след 2 седмици');

  // test month
  t.equal(tb.subMonths(1), 'преди 1 месец');
  t.equal(tb.subMonths(2), 'преди 2 месеца');
  t.equal(tb.subMonths(5), 'преди 5 месеца');
  t.equal(tb.addMonths(1), 'след 1 месец');
  t.equal(tb.addMonths(2), 'след 2 месеца');
  t.equal(tb.addMonths(5), 'след 5 месеца');

  // test year
  t.equal(tb.subYears(1), 'преди 1 година');
  t.equal(tb.subYears(2), 'преди 2 години');
  t.equal(tb.subYears(5), 'преди 5 години');
  t.equal(tb.subYears(21), 'преди 21 години');
  t.equal(tb.addYears(1), 'след 1 година');
  t.equal(tb.addYears(2), 'след 2 години');
  t.equal(tb.addYears(5), 'след 5 години');
  t.equal(tb.addYears(21), 'след 21 години');
};
