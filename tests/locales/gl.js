module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'xusto agora');
  t.equal(tb.subSeconds(10),  'hai 10 segundos');
  t.equal(tb.subSeconds(21), 'hai 21 segundos');
  t.equal(tb.subSeconds(22), 'hai 22 segundos');
  t.equal(tb.addSeconds(1), 'daquí a un pouco');
  t.equal(tb.addSeconds(10), 'en 10 segundos');
  t.equal(tb.addSeconds(21), 'en 21 segundos');
  t.equal(tb.addSeconds(22), 'en 22 segundos');

  // test minute
  t.equal(tb.subMinutes(1), 'hai 1 minuto');
  t.equal(tb.subMinutes(2), 'hai 2 minutos');
  t.equal(tb.subMinutes(5), 'hai 5 minutos');
  t.equal(tb.subMinutes(21), 'hai 21 minutos');
  t.equal(tb.addMinutes(1), 'nun minuto');
  t.equal(tb.addMinutes(2), 'en 2 minutos');
  t.equal(tb.addMinutes(5), 'en 5 minutos');
  t.equal(tb.addMinutes(21), 'en 21 minutos');
  
  // test hour
  t.equal(tb.subHours(1), 'hai 1 hora');
  t.equal(tb.subHours(2), 'hai 2 horas');
  t.equal(tb.subHours(5), 'hai 5 horas');
  t.equal(tb.subHours(21), 'hai 21 horas');
  t.equal(tb.addHours(1), 'nunha hora');
  t.equal(tb.addHours(2), 'en 2 horas');
  t.equal(tb.addHours(5), 'en 5 horas');
  t.equal(tb.addHours(21), 'en 21 horas');

  // test day
  t.equal(tb.subDays(1), 'hai 1 día');
  t.equal(tb.subDays(2), 'hai 2 días');
  t.equal(tb.subDays(5), 'hai 5 días');
  t.equal(tb.addDays(1), 'nun día');
  t.equal(tb.addDays(2), 'en 2 días');
  t.equal(tb.addDays(5), 'en 5 días');

  // test week
  t.equal(tb.subWeeks(1), 'hai 1 semana');
  t.equal(tb.subWeeks(2), 'hai 2 semanas');
  t.equal(tb.addWeeks(1), 'nunha semana');
  t.equal(tb.addWeeks(2), 'en 2 semanas');

  // test month
  t.equal(tb.subMonths(1), 'hai 1 mes');
  t.equal(tb.subMonths(2), 'hai 2 meses');
  t.equal(tb.subMonths(5), 'hai 5 meses');
  t.equal(tb.addMonths(1), 'nun mes');
  t.equal(tb.addMonths(2), 'en 2 meses');
  t.equal(tb.addMonths(5), 'en 5 meses');

  // test year
  t.equal(tb.subYears(1), 'hai 1 ano');
  t.equal(tb.subYears(2), 'hai 2 anos');
  t.equal(tb.subYears(5), 'hai 5 anos');
  t.equal(tb.subYears(21), 'hai 21 anos');
  t.equal(tb.addYears(1), 'nun ano');
  t.equal(tb.addYears(2), 'en 2 anos');
  t.equal(tb.addYears(5), 'en 5 anos');
  t.equal(tb.addYears(21), 'en 21 anos');
};