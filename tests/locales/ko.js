module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), '방금');
  t.equal(tb.subSeconds(10),  '10초 전');
  t.equal(tb.subSeconds(21), '21초 전');
  t.equal(tb.subSeconds(22), '22초 전');
  t.equal(tb.addSeconds(1), '곧');
  t.equal(tb.addSeconds(10), '10초 후');
  t.equal(tb.addSeconds(21), '21초 후');
  t.equal(tb.addSeconds(22), '22초 후');

  // test minute
  t.equal(tb.subMinutes(1), '1분 전');
  t.equal(tb.subMinutes(2), '2분 전');
  t.equal(tb.subMinutes(5), '5분 전');
  t.equal(tb.subMinutes(21), '21분 전');
  t.equal(tb.addMinutes(1), '1분 후');
  t.equal(tb.addMinutes(2), '2분 후');
  t.equal(tb.addMinutes(5), '5분 후');
  t.equal(tb.addMinutes(21), '21분 후');
  
  // test hour
  t.equal(tb.subHours(1), '1시간 전');
  t.equal(tb.subHours(2), '2시간 전');
  t.equal(tb.subHours(5), '5시간 전');
  t.equal(tb.subHours(21), '21시간 전');
  t.equal(tb.addHours(1), '1시간 후');
  t.equal(tb.addHours(2), '2시간 후');
  t.equal(tb.addHours(5), '5시간 후');
  t.equal(tb.addHours(21), '21시간 후');

  // test day
  t.equal(tb.subDays(1), '1일 전');
  t.equal(tb.subDays(2), '2일 전');
  t.equal(tb.subDays(5), '5일 전');
  t.equal(tb.addDays(1), '1일 후');
  t.equal(tb.addDays(2), '2일 후');
  t.equal(tb.addDays(5), '5일 후');

  // test week
  t.equal(tb.subWeeks(1), '1주일 전');
  t.equal(tb.subWeeks(2), '2주일 전');
  t.equal(tb.addWeeks(1), '1주일 후');
  t.equal(tb.addWeeks(2), '2주일 후');

  // test month
  t.equal(tb.subMonths(1), '1개월 전');
  t.equal(tb.subMonths(2), '2개월 전');
  t.equal(tb.subMonths(5), '5개월 전');
  t.equal(tb.addMonths(1), '1개월 후');
  t.equal(tb.addMonths(2), '2개월 후');
  t.equal(tb.addMonths(5), '5개월 후');

  // test year
  t.equal(tb.subYears(1), '1년 전');
  t.equal(tb.subYears(2), '2년 전');
  t.equal(tb.subYears(5), '5년 전');
  t.equal(tb.subYears(21), '21년 전');
  t.equal(tb.addYears(1), '1년 후');
  t.equal(tb.addYears(2), '2년 후');
  t.equal(tb.addYears(5), '5년 후');
  t.equal(tb.addYears(21), '21년 후');
};