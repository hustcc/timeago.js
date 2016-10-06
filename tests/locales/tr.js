module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'az önce');
  t.equal(tb.subSeconds(10),  '10 saniye önce');
  t.equal(tb.subSeconds(21), '21 saniye önce');
  t.equal(tb.subSeconds(22), '22 saniye önce');
  t.equal(tb.addSeconds(1), 'şimdi');
  t.equal(tb.addSeconds(10), '10 saniye içinde');
  t.equal(tb.addSeconds(21), '21 saniye içinde');
  t.equal(tb.addSeconds(22), '22 saniye içinde');

  // test minute
  t.equal(tb.subMinutes(1), '1 dakika önce');
  t.equal(tb.subMinutes(2), '2 dakika önce');
  t.equal(tb.subMinutes(5), '5 dakika önce');
  t.equal(tb.subMinutes(21), '21 dakika önce');
  t.equal(tb.addMinutes(1), '1 dakika içinde');
  t.equal(tb.addMinutes(2), '2 dakika içinde');
  t.equal(tb.addMinutes(5), '5 dakika içinde');
  t.equal(tb.addMinutes(21), '21 dakika içinde');
  
  // test hour
  t.equal(tb.subHours(1), '1 saat önce');
  t.equal(tb.subHours(2), '2 saat önce');
  t.equal(tb.subHours(5), '5 saat önce');
  t.equal(tb.subHours(21), '21 saat önce');
  t.equal(tb.addHours(1), '1 saat içinde');
  t.equal(tb.addHours(2), '2 saat içinde');
  t.equal(tb.addHours(5), '5 saat içinde');
  t.equal(tb.addHours(21), '21 saat içinde');

  // test day
  t.equal(tb.subDays(1), '1 gün önce');
  t.equal(tb.subDays(2), '2 gün önce');
  t.equal(tb.subDays(5), '5 gün önce');
  t.equal(tb.addDays(1), '1 gün içinde');
  t.equal(tb.addDays(2), '2 gün içinde');
  t.equal(tb.addDays(5), '5 gün içinde');

  // test week
  t.equal(tb.subWeeks(1), '1 hafta önce');
  t.equal(tb.subWeeks(2), '2 hafta önce');
  t.equal(tb.addWeeks(1), '1 hafta içinde');
  t.equal(tb.addWeeks(2), '2 hafta içinde');

  // test month
  t.equal(tb.subMonths(1), '1 ay önce');
  t.equal(tb.subMonths(2), '2 ay önce');
  t.equal(tb.subMonths(5), '5 ay önce');
  t.equal(tb.addMonths(1), '1 ay içinde');
  t.equal(tb.addMonths(2), '2 ay içinde');
  t.equal(tb.addMonths(5), '5 ay içinde');

  // test year
  t.equal(tb.subYears(1), '1 yıl önce');
  t.equal(tb.subYears(2), '2 yıl önce');
  t.equal(tb.subYears(5), '5 yıl önce');
  t.equal(tb.subYears(21), '21 yıl önce');
  t.equal(tb.addYears(1), '1 yıl içinde');
  t.equal(tb.addYears(2), '2 yıl içinde');
  t.equal(tb.addYears(5), '5 yıl içinde');
  t.equal(tb.addYears(21), '21 yıl içinde');
};
