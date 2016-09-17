module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'すこし前');
  t.equal(tb.subSeconds(10), '10秒前');
  t.equal(tb.subSeconds(21), '21秒前');
  t.equal(tb.subSeconds(22), '22秒前');
  t.equal(tb.addSeconds(1), 'すぐに');
  t.equal(tb.addSeconds(10), '10秒以内');
  t.equal(tb.addSeconds(21), '21秒以内');
  t.equal(tb.addSeconds(22), '22秒以内');

  // test minute
  t.equal(tb.subMinutes(1), '1分前');
  t.equal(tb.subMinutes(2), '2分前');
  t.equal(tb.subMinutes(5), '5分前');
  t.equal(tb.subMinutes(21), '21分前');
  t.equal(tb.addMinutes(1), '1分以内');
  t.equal(tb.addMinutes(2), '2分以内');
  t.equal(tb.addMinutes(5), '5分以内');
  t.equal(tb.addMinutes(21), '21分以内');

  // test hour
  t.equal(tb.subHours(1), '1時間前');
  t.equal(tb.subHours(2), '2時間前');
  t.equal(tb.subHours(5), '5時間前');
  t.equal(tb.subHours(21), '21時間前');
  t.equal(tb.addHours(1), '1時間以内');
  t.equal(tb.addHours(2), '2時間以内');
  t.equal(tb.addHours(5), '5時間以内');
  t.equal(tb.addHours(21), '21時間以内');

  // test day
  t.equal(tb.subDays(1), '1日前');
  t.equal(tb.subDays(2), '2日前');
  t.equal(tb.subDays(5), '5日前');
  t.equal(tb.addDays(1), '1日以内');
  t.equal(tb.addDays(2), '2日以内');
  t.equal(tb.addDays(5), '5日以内');

  // test week
  t.equal(tb.subWeeks(1), '1週間前');
  t.equal(tb.subWeeks(2), '2週間前');
  t.equal(tb.addWeeks(1), '1週間以内');
  t.equal(tb.addWeeks(2), '2週間以内');

  // test month
  t.equal(tb.subMonths(1), '1ヶ月前');
  t.equal(tb.subMonths(2), '2ヶ月前');
  t.equal(tb.subMonths(5), '5ヶ月前');
  t.equal(tb.addMonths(1), '1ヶ月以内');
  t.equal(tb.addMonths(2), '2ヶ月以内');
  t.equal(tb.addMonths(5), '5ヶ月以内');

  // test year
  t.equal(tb.subYears(1), '1年前');
  t.equal(tb.subYears(2), '2年前');
  t.equal(tb.subYears(5), '5年前');
  t.equal(tb.subYears(21), '21年前');
  t.equal(tb.addYears(1), '1年以内');
  t.equal(tb.addYears(2), '2年以内');
  t.equal(tb.addYears(5), '5年以内');
  t.equal(tb.addYears(21), '21年以内');
};