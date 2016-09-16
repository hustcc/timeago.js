module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'baru saja');
  t.equal(tb.subSeconds(10), '10 detik yang lalu');
  t.equal(tb.subSeconds(21), '21 detik yang lalu');
  t.equal(tb.subSeconds(22), '22 detik yang lalu');
  t.equal(tb.addSeconds(1), 'sebentar');
  t.equal(tb.addSeconds(10), 'dalam 10 detik');
  t.equal(tb.addSeconds(21), 'dalam 21 detik');
  t.equal(tb.addSeconds(22), 'dalam 22 detik');

  // test minute
  t.equal(tb.subMinutes(1), '1 menit yang lalu');
  t.equal(tb.subMinutes(2), '2 menit yang lalu');
  t.equal(tb.subMinutes(5), '5 menit yang lalu');
  t.equal(tb.subMinutes(21), '21 menit yang lalu');
  t.equal(tb.addMinutes(1), 'dalam 1 menit');
  t.equal(tb.addMinutes(2), 'dalam 2 menit');
  t.equal(tb.addMinutes(5), 'dalam 5 menit');
  t.equal(tb.addMinutes(21), 'dalam 21 menit');
  
  // test hour
  t.equal(tb.subHours(1), '1 jam yang lalu');
  t.equal(tb.subHours(2), '2 jam yang lalu');
  t.equal(tb.subHours(5), '5 jam yang lalu');
  t.equal(tb.subHours(21), '21 jam yang lalu');
  t.equal(tb.addHours(1), 'dalam 1 jam');
  t.equal(tb.addHours(2), 'dalam 2 jam');
  t.equal(tb.addHours(5), 'dalam 5 jam');
  t.equal(tb.addHours(21), 'dalam 21 jam');

  // test day
  t.equal(tb.subDays(1), '1 hari yang lalu');
  t.equal(tb.subDays(2), '2 hari yang lalu');
  t.equal(tb.subDays(5), '5 hari yang lalu');
  t.equal(tb.addDays(1), 'dalam 1 hari');
  t.equal(tb.addDays(2), 'dalam 2 hari');
  t.equal(tb.addDays(5), 'dalam 5 hari');

  // test week
  t.equal(tb.subWeeks(1), '1 minggu yang lalu');
  t.equal(tb.subWeeks(2), '2 minggu yang lalu');
  t.equal(tb.addWeeks(1), 'dalam 1 minggu');
  t.equal(tb.addWeeks(2), 'dalam 2 minggu');

  // test month
  t.equal(tb.subMonths(1), '1 bulan yang lalu');
  t.equal(tb.subMonths(2), '2 bulan yang lalu');
  t.equal(tb.subMonths(5), '5 bulan yang lalu');
  t.equal(tb.addMonths(1), 'dalam 1 bulan');
  t.equal(tb.addMonths(2), 'dalam 2 bulan');
  t.equal(tb.addMonths(5), 'dalam 5 bulan');

  // test year
  t.equal(tb.subYears(1), '1 tahun yang lalu');
  t.equal(tb.subYears(2), '2 tahun yang lalu');
  t.equal(tb.subYears(5), '5 tahun yang lalu');
  t.equal(tb.subYears(21), '21 tahun yang lalu');
  t.equal(tb.addYears(1), 'dalam 1 tahun');
  t.equal(tb.addYears(2), 'dalam 2 tahun');
  t.equal(tb.addYears(5), 'dalam 5 tahun');
  t.equal(tb.addYears(21), 'dalam 21 tahun');
};