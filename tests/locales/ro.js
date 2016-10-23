module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'chiar acum');
  t.equal(tb.subSeconds(10),  'acum 10 secunde');
  t.equal(tb.subSeconds(21), 'acum 21 de secunde');
  t.equal(tb.subSeconds(22), 'acum 22 de secunde');
  t.equal(tb.addSeconds(1), 'chiar acum');
  t.equal(tb.addSeconds(10), 'peste 10 secunde');
  t.equal(tb.addSeconds(21), 'peste 21 de secunde');
  t.equal(tb.addSeconds(22), 'peste 22 de secunde');

  // test minute
  t.equal(tb.subMinutes(1), 'acum un minut');
  t.equal(tb.subMinutes(2), 'acum 2 minute');
  t.equal(tb.subMinutes(5), 'acum 5 minute');
  t.equal(tb.subMinutes(21), 'acum 21 de minute');
  t.equal(tb.addMinutes(1), 'peste un minut');
  t.equal(tb.addMinutes(2), 'peste 2 minute');
  t.equal(tb.addMinutes(5), 'peste 5 minute');
  
  // test hour
  t.equal(tb.subHours(1), 'acum o oră');
  t.equal(tb.subHours(2), 'acum 2 ore');
  t.equal(tb.subHours(5), 'acum 5 ore');
  t.equal(tb.subHours(21), 'acum 21 de ore');
  t.equal(tb.addHours(1), 'peste o oră');
  t.equal(tb.addHours(2), 'peste 2 ore');
  t.equal(tb.addHours(5), 'peste 5 ore');
  t.equal(tb.addHours(21), 'peste 21 de ore');

  // test day
  t.equal(tb.subDays(1), 'acum o zi');
  t.equal(tb.subDays(2), 'acum 2 zile');
  t.equal(tb.subDays(5), 'acum 5 zile');
  t.equal(tb.addDays(1), 'peste o zi');
  t.equal(tb.addDays(2), 'peste 2 zile');
  t.equal(tb.addDays(5), 'peste 5 zile');
  
  // test week
  t.equal(tb.subWeeks(1), 'acum o săptămână');
  t.equal(tb.subWeeks(2), 'acum 2 săptămâni');
  t.equal(tb.addWeeks(1), 'peste o săptămână');
  t.equal(tb.addWeeks(2), 'peste 2 săptămâni');
  
  // test month
  t.equal(tb.subMonths(1), 'acum o lună');
  t.equal(tb.subMonths(2), 'acum 2 luni');
  t.equal(tb.subMonths(5), 'acum 5 luni');
  t.equal(tb.addMonths(1), 'peste o lună');
  t.equal(tb.addMonths(2), 'peste 2 luni');
  t.equal(tb.addMonths(5), 'peste 5 luni');
  
  // test year
  t.equal(tb.subYears(1), 'acum un an');
  t.equal(tb.subYears(2), 'acum 2 ani');
  t.equal(tb.subYears(5), 'acum 5 ani');
  t.equal(tb.subYears(21), 'acum 21 de ani');
  t.equal(tb.addYears(1), 'peste un an');
  t.equal(tb.addYears(2), 'peste 2 ani');
  t.equal(tb.addYears(5), 'peste 5 ani');
  t.equal(tb.addYears(21), 'peste 21 de ani');
};