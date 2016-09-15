module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'щойно');
  t.equal(tb.subSeconds(10), '10 секунд тому');
  t.equal(tb.subSeconds(21), '21 секунду тому');
  t.equal(tb.subSeconds(22), '22 секунди тому');
  t.equal(tb.addSeconds(1), 'через декілька секунд');
  t.equal(tb.addSeconds(10), 'через 10 секунд');
  t.equal(tb.addSeconds(21), 'через 21 секунду');
  t.equal(tb.addSeconds(22), 'через 22 секунди');

  // test minute
  t.equal(tb.subMinutes(1), 'хвилину тому');
  t.equal(tb.subMinutes(2), '2 хвилини тому');
  t.equal(tb.subMinutes(5), '5 хвилин тому');
  t.equal(tb.subMinutes(21),  '21 хвилину тому');
  t.equal(tb.addMinutes(1), 'через хвилину');
  t.equal(tb.addMinutes(2), 'через 2 хвилини');
  t.equal(tb.addMinutes(5), 'через 5 хвилин');
  t.equal(tb.addMinutes(21), 'через 21 хвилину');

  // test hour
  t.equal(tb.subHours(1), 'годину тому');
  t.equal(tb.subHours(2), '2 години тому');
  t.equal(tb.subHours(5),  '5 годин тому');
  t.equal(tb.subHours(21), '21 годину тому');
  t.equal(tb.addHours(1), 'через годину');
  t.equal(tb.addHours(2), 'через 2 години');
  t.equal(tb.addHours(5), 'через 5 годин');
  t.equal(tb.addHours(21),  'через 21 годину');

  // test day
  t.equal(tb.subDays(1), 'день тому');
  t.equal(tb.subDays(2), '2 дні тому');
  t.equal(tb.subDays(5), '5 днів тому');
  t.equal(tb.addDays(1), 'через день');
  t.equal(tb.addDays(2), 'через 2 дні');
  t.equal(tb.addDays(5), 'через 5 днів');

  // test week
  t.equal(tb.subWeeks(1), 'тиждень тому');
  t.equal(tb.subWeeks(2), '2 тиждні тому');
  t.equal(tb.addWeeks(1), 'через тиждень');
  t.equal(tb.addWeeks(2), 'через 2 тиждні');

  // test month
  t.equal(tb.subMonths(1), 'місяць тому');
  t.equal(tb.subMonths(2), '2 місяці тому');
  t.equal(tb.subMonths(5), '5 місяців тому');
  t.equal(tb.addMonths(1), 'через місяць');
  t.equal(tb.addMonths(2), 'через 2 місяці');
  t.equal(tb.addMonths(5), 'через 5 місяців');

  // test year
  t.equal(tb.subYears(1), 'рік тому');
  t.equal(tb.subYears(2), '2 роки тому');
  t.equal(tb.subYears(5), '5 років тому');
  t.equal(tb.subYears(21), '21 рік тому');
  t.equal(tb.addYears(1), 'через рік');
  t.equal(tb.addYears(2), 'через 2 роки');
  t.equal(tb.addYears(5), 'через 5 років');
  t.equal(tb.addYears(21), 'через 21 рік');
};
