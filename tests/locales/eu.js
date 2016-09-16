module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'orain');
  t.equal(tb.subSeconds(10),  'duela 10 segundu');
  t.equal(tb.subSeconds(21), 'duela 21 segundu');
  t.equal(tb.subSeconds(22), 'duela 22 segundu');
  t.equal(tb.addSeconds(1), 'denbora bat barru');
  t.equal(tb.addSeconds(10), '10 segundu barru');
  t.equal(tb.addSeconds(21), '21 segundu barru');
  t.equal(tb.addSeconds(22), '22 segundu barru');

  // test minute
  t.equal(tb.subMinutes(1), 'duela minutu 1');
  t.equal(tb.subMinutes(2), 'duela 2 minutu');
  t.equal(tb.subMinutes(5), 'duela 5 minutu');
  t.equal(tb.subMinutes(21), 'duela 21 minutu');
  t.equal(tb.addMinutes(1), 'minutu 1 barru');
  t.equal(tb.addMinutes(2), '2 minutu barru');
  t.equal(tb.addMinutes(5), '5 minutu barru');
  t.equal(tb.addMinutes(21), '21 minutu barru');
  
  // test hour
  t.equal(tb.subHours(1), 'duela ordu 1');
  t.equal(tb.subHours(2), 'duela 2 ordu');
  t.equal(tb.subHours(5), 'duela 5 ordu');
  t.equal(tb.subHours(21), 'duela 21 ordu');
  t.equal(tb.addHours(1), 'ordu 1 barru');
  t.equal(tb.addHours(2), '2 ordu barru');
  t.equal(tb.addHours(5), '5 ordu barru');
  t.equal(tb.addHours(21), '21 ordu barru');

  // test day
  t.equal(tb.subDays(1), 'duela egun 1');
  t.equal(tb.subDays(2), 'duela 2 egun');
  t.equal(tb.subDays(5), 'duela 5 egun');
  t.equal(tb.addDays(1), 'egun 1 barru');
  t.equal(tb.addDays(2), '2 egun barru');
  t.equal(tb.addDays(5), '5 egun barru');

  // test week
  t.equal(tb.subWeeks(1), 'duela aste 1');
  t.equal(tb.subWeeks(2), 'duela 2 aste');
  t.equal(tb.addWeeks(1), 'aste 1 barru');
  t.equal(tb.addWeeks(2), '2 aste barru');

  // test month
  t.equal(tb.subMonths(1), 'duela hillabete 1');
  t.equal(tb.subMonths(2), 'duela 2 hillabete');
  t.equal(tb.subMonths(5), 'duela 5 hillabete');
  t.equal(tb.addMonths(1), 'hillabete 1 barru');
  t.equal(tb.addMonths(2), '2 hillabete barru');
  t.equal(tb.addMonths(5), '5 hillabete barru');

  // test year
  t.equal(tb.subYears(1), 'duela urte 1');
  t.equal(tb.subYears(2), 'duela 2 urte');
  t.equal(tb.subYears(5), 'duela 5 urte');
  t.equal(tb.subYears(21), 'duela 21 urte');
  t.equal(tb.addYears(1), 'urte 1 barru');
  t.equal(tb.addYears(2), '2 urte barru');
  t.equal(tb.addYears(5), '5 urte barru');
  t.equal(tb.addYears(21), '21 urte barru');
};
