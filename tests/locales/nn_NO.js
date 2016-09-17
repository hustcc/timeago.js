module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'nett no');
  t.equal(tb.subSeconds(10), '10 sekund sidan');
  t.equal(tb.subSeconds(21), '21 sekund sidan');
  t.equal(tb.subSeconds(22), '22 sekund sidan');
  t.equal(tb.addSeconds(1), 'om litt');
  t.equal(tb.addSeconds(10), 'om 10 sekund');
  t.equal(tb.addSeconds(21), 'om 21 sekund');
  t.equal(tb.addSeconds(22), 'om 22 sekund');

  // test minute
  t.equal(tb.subMinutes(1), '1 minutt sidan');
  t.equal(tb.subMinutes(2), '2 minutt sidan');
  t.equal(tb.subMinutes(5), '5 minutt sidan');
  t.equal(tb.subMinutes(21), '21 minutt sidan');
  t.equal(tb.addMinutes(1), 'om 1 minutt');
  t.equal(tb.addMinutes(2), 'om 2 minutt');
  t.equal(tb.addMinutes(5), 'om 5 minutt');
  t.equal(tb.addMinutes(21), 'om 21 minutt');

  // test hour
  t.equal(tb.subHours(1), '1 time sidan');
  t.equal(tb.subHours(2), '2 timar sidan');
  t.equal(tb.subHours(5), '5 timar sidan');
  t.equal(tb.subHours(21), '21 timar sidan');
  t.equal(tb.addHours(1), 'om 1 time');
  t.equal(tb.addHours(2), 'om 2 timar');
  t.equal(tb.addHours(5), 'om 5 timar');
  t.equal(tb.addHours(21), 'om 21 timar');

  // test day
  t.equal(tb.subDays(1), '1 dag sidan');
  t.equal(tb.subDays(2), '2 dagar sidan');
  t.equal(tb.subDays(5), '5 dagar sidan');
  t.equal(tb.addDays(1), 'om 1 dag');
  t.equal(tb.addDays(2), 'om 2 dagar');
  t.equal(tb.addDays(5), 'om 5 dagar');

  // test week
  t.equal(tb.subWeeks(1), '1 veke sidan');
  t.equal(tb.subWeeks(2), '2 veker sidan');
  t.equal(tb.addWeeks(1), 'om 1 veke');
  t.equal(tb.addWeeks(2), 'om 2 veker');

  // test month
  t.equal(tb.subMonths(1), '1 månad sidan');
  t.equal(tb.subMonths(2), '2 månadar sidan');
  t.equal(tb.subMonths(5), '5 månadar sidan');
  t.equal(tb.addMonths(1), 'om 1 månad');
  t.equal(tb.addMonths(2), 'om 2 månadar');
  t.equal(tb.addMonths(5), 'om 5 månadar');

  // test year
  t.equal(tb.subYears(1), '1 år sidan');
  t.equal(tb.subYears(2), '2 år sidan');
  t.equal(tb.subYears(5), '5 år sidan');
  t.equal(tb.subYears(21), '21 år sidan');
  t.equal(tb.addYears(1), 'om 1 år');
  t.equal(tb.addYears(2), 'om 2 år');
  t.equal(tb.addYears(5), 'om 5 år');
  t.equal(tb.addYears(21), 'om 21 år');
};