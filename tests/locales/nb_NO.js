module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'akkurat nå');
  t.equal(tb.subSeconds(10), '10 sekunder siden');
  t.equal(tb.subSeconds(21), '21 sekunder siden');
  t.equal(tb.subSeconds(22), '22 sekunder siden');
  t.equal(tb.addSeconds(1), 'om litt');
  t.equal(tb.addSeconds(10), 'om 10 sekunder');
  t.equal(tb.addSeconds(21), 'om 21 sekunder');
  t.equal(tb.addSeconds(22), 'om 22 sekunder');

  // test minute
  t.equal(tb.subMinutes(1), '1 minutt siden');
  t.equal(tb.subMinutes(2), '2 minutter siden');
  t.equal(tb.subMinutes(5), '5 minutter siden');
  t.equal(tb.subMinutes(21), '21 minutter siden');
  t.equal(tb.addMinutes(1), 'om 1 minutt');
  t.equal(tb.addMinutes(2), 'om 2 minutter');
  t.equal(tb.addMinutes(5), 'om 5 minutter');
  t.equal(tb.addMinutes(21), 'om 21 minutter');

  // test hour
  t.equal(tb.subHours(1), '1 time siden');
  t.equal(tb.subHours(2), '2 timer siden');
  t.equal(tb.subHours(5), '5 timer siden');
  t.equal(tb.subHours(21), '21 timer siden');
  t.equal(tb.addHours(1), 'om 1 time');
  t.equal(tb.addHours(2), 'om 2 timer');
  t.equal(tb.addHours(5), 'om 5 timer');
  t.equal(tb.addHours(21), 'om 21 timer');

  // test day
  t.equal(tb.subDays(1), '1 dag siden');
  t.equal(tb.subDays(2), '2 dager siden');
  t.equal(tb.subDays(5), '5 dager siden');
  t.equal(tb.addDays(1), 'om 1 dag');
  t.equal(tb.addDays(2), 'om 2 dager');
  t.equal(tb.addDays(5), 'om 5 dager');

  // test week
  t.equal(tb.subWeeks(1), '1 uke siden');
  t.equal(tb.subWeeks(2), '2 uker siden');
  t.equal(tb.addWeeks(1), 'om 1 uke');
  t.equal(tb.addWeeks(2), 'om 2 uker');

  // test month
  t.equal(tb.subMonths(1), '1 måned siden');
  t.equal(tb.subMonths(2), '2 måneder siden');
  t.equal(tb.subMonths(5), '5 måneder siden');
  t.equal(tb.addMonths(1), 'om 1 måned');
  t.equal(tb.addMonths(2), 'om 2 måneder');
  t.equal(tb.addMonths(5), 'om 5 måneder');

  // test year
  t.equal(tb.subYears(1), '1 år siden');
  t.equal(tb.subYears(2), '2 år siden');
  t.equal(tb.subYears(5), '5 år siden');
  t.equal(tb.subYears(21), '21 år siden');
  t.equal(tb.addYears(1), 'om 1 år');
  t.equal(tb.addYears(2), 'om 2 år');
  t.equal(tb.addYears(5), 'om 5 år');
  t.equal(tb.addYears(21), 'om 21 år');
};