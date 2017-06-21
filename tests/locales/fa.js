module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'همین الآن');
  t.equal(tb.subSeconds(10),  '10 ثانیه پیش');
  t.equal(tb.subSeconds(21), '21 ثانیه پیش');
  t.equal(tb.subSeconds(22), '22 ثانیه پیش');
  t.equal(tb.addSeconds(1), 'لحظاتی پیش');
  t.equal(tb.addSeconds(10), 'حدود 10 ثانیه پیش');
  t.equal(tb.addSeconds(21), 'حدود 21 ثانیه پیش');
  t.equal(tb.addSeconds(22), 'حدود 22 ثانیه پیش');

  // test minute
  t.equal(tb.subMinutes(1), '1 دقیقه پیش');
  t.equal(tb.subMinutes(2), '2 دقیقه پیش');
  t.equal(tb.subMinutes(5), '5 دقیقه پیش');
  t.equal(tb.subMinutes(21), '21 دقیقه پیش');
  t.equal(tb.addMinutes(1), 'حدود 1 دقیقه پیش');
  t.equal(tb.addMinutes(2), 'حدود 2 دقیقه پیش');
  t.equal(tb.addMinutes(5), 'حدود 5 دقیقه پیش');
  t.equal(tb.addMinutes(21), 'حدود 21 دقیقه پیش');

  // test hour
  t.equal(tb.subHours(1), '1 ساعت پیش');
  t.equal(tb.subHours(2), '2 ساعت پیش');
  t.equal(tb.subHours(5), '5 ساعت پیش');
  t.equal(tb.subHours(21), '21 ساعت پیش');
  t.equal(tb.addHours(1), 'حدود 1 ساعت پیش');
  t.equal(tb.addHours(2), 'حدود 2 ساعت پیش');
  t.equal(tb.addHours(5), 'حدود 5 ساعت پیش');
  t.equal(tb.addHours(21), 'حدود 21 ساعت پیش');

  // test day
  t.equal(tb.subDays(1), '1 روز پیش');
  t.equal(tb.subDays(2), '2 روز پیش');
  t.equal(tb.subDays(5), '5 روز پیش');
  t.equal(tb.addDays(1), 'حدود 1 روز پیش');
  t.equal(tb.addDays(2), 'حدود 2 روز پیش');
  t.equal(tb.addDays(5), 'حدود 5 روز پیش');

  // test week
  t.equal(tb.subWeeks(1), '1 هفته پیش');
  t.equal(tb.subWeeks(2), '2 هفته پیش');
  t.equal(tb.addWeeks(1), 'حدود 1 هفته پیش');
  t.equal(tb.addWeeks(2), 'حدود 2 هفته پیش');

  // test month
  t.equal(tb.subMonths(1), '1 ماه پیش');
  t.equal(tb.subMonths(2), '2 ماه پیش');
  t.equal(tb.subMonths(5), '5 ماه پیش');
  t.equal(tb.addMonths(1), 'حدود 1 ماه پیش');
  t.equal(tb.addMonths(2), 'حدود 2 ماه پیش');
  t.equal(tb.addMonths(5), 'حدود 5 ماه پیش');

  // test year
  t.equal(tb.subYears(1), '1 سال پیش');
  t.equal(tb.subYears(2), '2 سال پیش');
  t.equal(tb.subYears(5), '5 سال پیش');
  t.equal(tb.subYears(21), '21 سال پیش');
  t.equal(tb.addYears(1), 'حدود 1 سال پیش');
  t.equal(tb.addYears(2), 'حدود 2 سال پیش');
  t.equal(tb.addYears(5), 'حدود 5 سال پیش');
  t.equal(tb.addYears(21), 'حدود 21 سال پیش');
};
