module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'همین الان');
  t.equal(tb.subSeconds(10),  '10 ثانیه قبل');
  t.equal(tb.subSeconds(21), '21 ثانیه قبل');
  t.equal(tb.subSeconds(22), '22 ثانیه قبل');
  t.equal(tb.addSeconds(1), 'همین الان');
  t.equal(tb.addSeconds(10), 'در 10 ثانیه');
  t.equal(tb.addSeconds(21), 'در 21 ثانیه');
  t.equal(tb.addSeconds(22), 'در 22 ثانیه');

  // test minute
  t.equal(tb.subMinutes(1), '1 دقیقه قبل');
  t.equal(tb.subMinutes(2), '2 دقیقه قبل');
  t.equal(tb.subMinutes(5), '5 دقیقه قبل');
  t.equal(tb.subMinutes(21), '21 دقیقه قبل');
  t.equal(tb.addMinutes(1), 'در 1 دقیقه');
  t.equal(tb.addMinutes(2), 'در 2 دقیقه');
  t.equal(tb.addMinutes(5), 'در 5 دقیقه');
  t.equal(tb.addMinutes(21), 'در 21 دقیقه');
  
  // test hour
  t.equal(tb.subHours(1), '1 ساعت قبل');
  t.equal(tb.subHours(2), '2 ساعت قبل');
  t.equal(tb.subHours(5), '5 ساعت قبل');
  t.equal(tb.subHours(21), '21 ساعت قبل');
  t.equal(tb.addHours(1), 'در 1 ساعت');
  t.equal(tb.addHours(2), 'در 2 ساعت');
  t.equal(tb.addHours(5), 'در 5 ساعت');
  t.equal(tb.addHours(21), 'در 21 ساعت');

  // test day
  t.equal(tb.subDays(1), '1 روز قبل');
  t.equal(tb.subDays(2), '2 روز قبل');
  t.equal(tb.subDays(5), '5 روز قبل');
  t.equal(tb.addDays(1), 'در 1 روز');
  t.equal(tb.addDays(2), 'در 2 روز');
  t.equal(tb.addDays(5), 'در 5 روز');

  // test week
  t.equal(tb.subWeeks(1), '1 هقته قبل');
  t.equal(tb.subWeeks(2), '2 هفته قبل');
  t.equal(tb.addWeeks(1), 'در 1 هفته');
  t.equal(tb.addWeeks(2), 'در 2 هفته');

  // test month
  t.equal(tb.subMonths(1), '1 ماه قبل');
  t.equal(tb.subMonths(2), '2 ماه قبل');
  t.equal(tb.subMonths(5), '5 ماه قبل');
  t.equal(tb.addMonths(1), 'در 1 ماه');
  t.equal(tb.addMonths(2), 'در 2 ماه');
  t.equal(tb.addMonths(5), 'در 5 ماه');

  // test year
  t.equal(tb.subYears(1), '1 سال قبل');
  t.equal(tb.subYears(2), '2 سال قبل');
  t.equal(tb.subYears(5), '5 سال قبل');
  t.equal(tb.subYears(21), '21 سال قبل');
  t.equal(tb.addYears(1), 'در 1 سال');
  t.equal(tb.addYears(2), 'در 2 سال');
  t.equal(tb.addYears(5), 'در 5 سال');
  t.equal(tb.addYears(21), 'در 21 سال');
};