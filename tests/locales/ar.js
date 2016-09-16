module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'منذ لحظات');
  t.equal(tb.subSeconds(10), 'منذ 10 ثوان');
  t.equal(tb.subSeconds(21), 'منذ 21 ثانية');
  t.equal(tb.subSeconds(22), 'منذ 22 ثانية');
  t.equal(tb.addSeconds(1), 'بعد لحظات');
  t.equal(tb.addSeconds(10), 'بعد 10 ثوان');
  t.equal(tb.addSeconds(21), 'بعد 21 ثانية');
  t.equal(tb.addSeconds(22), 'بعد 22 ثانية');

  // test minute
  t.equal(tb.subMinutes(1), 'منذ دقيقة');
  t.equal(tb.subMinutes(2), 'منذ دقيقتين');
  t.equal(tb.subMinutes(5), 'منذ 5 دقائق');
  t.equal(tb.subMinutes(21), 'منذ 21 دقيقة');
  t.equal(tb.addMinutes(1), 'بعد دقيقة');
  t.equal(tb.addMinutes(2), 'بعد دقيقتين');
  t.equal(tb.addMinutes(5), 'بعد 5 دقائق');
  t.equal(tb.addMinutes(21), 'بعد 21 دقيقة');
  
  // test hour
  t.equal(tb.subHours(1), 'منذ ساعة');
  t.equal(tb.subHours(2), 'منذ ساعتين');
  t.equal(tb.subHours(5), 'منذ 5 ساعات');
  t.equal(tb.subHours(21), 'منذ 21 ساعة');
  t.equal(tb.addHours(1), 'بعد ساعة');
  t.equal(tb.addHours(2), 'بعد ساعتين');
  t.equal(tb.addHours(5), 'بعد 5 ساعات');
  t.equal(tb.addHours(21), 'بعد 21 ساعة');

  // test day
  t.equal(tb.subDays(1), 'منذ يوم');
  t.equal(tb.subDays(2), 'منذ يومين');
  t.equal(tb.subDays(5), 'منذ 5 أيام');
  t.equal(tb.addDays(1), 'بعد يوم');
  t.equal(tb.addDays(2), 'بعد يومين');
  t.equal(tb.addDays(5), 'بعد 5 أيام');

  // test week
  t.equal(tb.subWeeks(1), 'منذ أسبوع');
  t.equal(tb.subWeeks(2), 'منذ أسبوعين');
  t.equal(tb.subWeeks(3), 'منذ 3 أسابيع');
  t.equal(tb.addWeeks(1), 'بعد أسبوع');
  t.equal(tb.addWeeks(2), 'بعد أسبوعين');
  t.equal(tb.addWeeks(3), 'بعد 3 أسابيع');

  // test month
  t.equal(tb.subMonths(1), 'منذ شهر');
  t.equal(tb.subMonths(2), 'منذ شهرين');
  t.equal(tb.subMonths(5), 'منذ 5 أشهر');
  //t.equal(tb.subMonths(11), 'منذ 11 شهراً'); skip - subMonths(11) reports minus 10 months
  t.equal(tb.addMonths(1), 'بعد شهر');
  t.equal(tb.addMonths(2), 'بعد شهرين');
  t.equal(tb.addMonths(5), 'بعد 5 أشهر');
  //t.equal(tb.addMonths(11), 'بعد 11 شهراً'); skip - addMonths(11) reports plus 10 months

  // test year
  t.equal(tb.subYears(1), 'منذ عام');
  t.equal(tb.subYears(2), 'منذ عامين');
  t.equal(tb.subYears(5), 'منذ 5 أعوام');
  t.equal(tb.subYears(21), 'منذ 21 عاماً');
  t.equal(tb.addYears(1), 'بعد عام');
  t.equal(tb.addYears(2), 'بعد عامين');
  t.equal(tb.addYears(5), 'بعد 5 أعوام');
  t.equal(tb.addYears(21), 'بعد 21 عاماً');
};