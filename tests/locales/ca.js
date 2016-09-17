module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'fa un moment');
  t.equal(tb.subSeconds(10), 'fa 10 segons');
  t.equal(tb.subSeconds(21), 'fa 21 segons');
  t.equal(tb.subSeconds(22), 'fa 22 segons');
  t.equal(tb.addSeconds(1), 'd\'aquí un moment');
  t.equal(tb.addSeconds(10), 'd\'aquí 10 segons');
  t.equal(tb.addSeconds(21), 'd\'aquí 21 segons');
  t.equal(tb.addSeconds(22), 'd\'aquí 22 segons');

  // test minute
  t.equal(tb.subMinutes(1), 'fa 1 minut');
  t.equal(tb.subMinutes(2), 'fa 2 minuts');
  t.equal(tb.subMinutes(5), 'fa 5 minuts');
  t.equal(tb.subMinutes(21), 'fa 21 minuts');
  t.equal(tb.addMinutes(1), 'd\'aquí 1 minut');
  t.equal(tb.addMinutes(2), 'd\'aquí 2 minuts');
  t.equal(tb.addMinutes(5), 'd\'aquí 5 minuts');
  t.equal(tb.addMinutes(21), 'd\'aquí 21 minuts');

  // test hour
  t.equal(tb.subHours(1), 'fa 1 hora');
  t.equal(tb.subHours(2), 'fa 2 hores');
  t.equal(tb.subHours(5), 'fa 5 hores');
  t.equal(tb.subHours(21), 'fa 21 hores');
  t.equal(tb.addHours(1), 'd\'aquí 1 hora');
  t.equal(tb.addHours(2), 'd\'aquí 2 hores');
  t.equal(tb.addHours(5), 'd\'aquí 5 hores');
  t.equal(tb.addHours(21), 'd\'aquí 21 hores');

  // test day
  t.equal(tb.subDays(1), 'fa 1 dia');
  t.equal(tb.subDays(2), 'fa 2 dies');
  t.equal(tb.subDays(5), 'fa 5 dies');
  t.equal(tb.addDays(1), 'd\'aquí 1 dia');
  t.equal(tb.addDays(2), 'd\'aquí 2 dies');
  t.equal(tb.addDays(5), 'd\'aquí 5 dies');

  // test week
  t.equal(tb.subWeeks(1), 'fa 1 setmana');
  t.equal(tb.subWeeks(2), 'fa 2 setmanes');
  t.equal(tb.addWeeks(1), 'd\'aquí 1 setmana');
  t.equal(tb.addWeeks(2), 'd\'aquí 2 setmanes');

  // test month
  t.equal(tb.subMonths(1), 'fa 1 mes');
  t.equal(tb.subMonths(2), 'fa 2 mesos');
  t.equal(tb.subMonths(5), 'fa 5 mesos');
  t.equal(tb.addMonths(1), 'd\'aquí 1 mes');
  t.equal(tb.addMonths(2), 'd\'aquí 2 mesos');
  t.equal(tb.addMonths(5), 'd\'aquí 5 mesos');

  // test year
  t.equal(tb.subYears(1), 'fa 1 any');
  t.equal(tb.subYears(2), 'fa 2 anys');
  t.equal(tb.subYears(5), 'fa 5 anys');
  t.equal(tb.subYears(21), 'fa 21 anys');
  t.equal(tb.addYears(1), 'd\'aquí 1 any');
  t.equal(tb.addYears(2), 'd\'aquí 2 anys');
  t.equal(tb.addYears(5), 'd\'aquí 5 anys');
  t.equal(tb.addYears(21), 'd\'aquí 21 anys');
};

