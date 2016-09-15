module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), '刚刚');
  t.equal(tb.subSeconds(10),  '10秒前');
  t.equal(tb.subSeconds(21), '21秒前');
  t.equal(tb.subSeconds(22), '22秒前');
  t.equal(tb.addSeconds(1), '片刻后');
  t.equal(tb.addSeconds(10), '10秒后');
  t.equal(tb.addSeconds(21), '21秒后');
  t.equal(tb.addSeconds(22), '22秒后');

  // test minute
  t.equal(tb.subMinutes(1), '1分钟前');
  t.equal(tb.subMinutes(2), '2分钟前');
  t.equal(tb.subMinutes(5), '5分钟前');
  t.equal(tb.subMinutes(21), '21分钟前');
  t.equal(tb.addMinutes(1), '1分钟后');
  t.equal(tb.addMinutes(2), '2分钟后');
  t.equal(tb.addMinutes(5), '5分钟后');
  t.equal(tb.addMinutes(21), '21分钟后');
  
  // test hour
  t.equal(tb.subHours(1), '1小时前');
  t.equal(tb.subHours(2), '2小时前');
  t.equal(tb.subHours(5), '5小时前');
  t.equal(tb.subHours(21), '21小时前');
  t.equal(tb.addHours(1), '1小时后');
  t.equal(tb.addHours(2), '2小时后');
  t.equal(tb.addHours(5), '5小时后');
  t.equal(tb.addHours(21), '21小时后');

  // test day
  t.equal(tb.subDays(1), '1天前');
  t.equal(tb.subDays(2), '2天前');
  t.equal(tb.subDays(5), '5天前');
  t.equal(tb.addDays(1), '1天后');
  t.equal(tb.addDays(2), '2天后');
  t.equal(tb.addDays(5), '5天后');

  // test week
  t.equal(tb.subWeeks(1), '1周前');
  t.equal(tb.subWeeks(2), '2周前');
  t.equal(tb.addWeeks(1), '1周后');
  t.equal(tb.addWeeks(2), '2周后');

  // test month
  t.equal(tb.subMonths(1), '1月前');
  t.equal(tb.subMonths(2), '2月前');
  t.equal(tb.subMonths(5), '5月前');
  t.equal(tb.addMonths(1), '1月后');
  t.equal(tb.addMonths(2), '2月后');
  t.equal(tb.addMonths(5), '5月后');

  // test year
  t.equal(tb.subYears(1), '1年前');
  t.equal(tb.subYears(2), '2年前');
  t.equal(tb.subYears(5), '5年前');
  t.equal(tb.subYears(21), '21年前');
  t.equal(tb.addYears(1), '1年后');
  t.equal(tb.addYears(2), '2年后');
  t.equal(tb.addYears(5), '5年后');
  t.equal(tb.addYears(21), '21年后');
};