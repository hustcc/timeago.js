module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'vừa xong');
  t.equal(tb.subSeconds(10), '10 giây trước');
  t.equal(tb.subSeconds(21), '21 giây trước');
  t.equal(tb.subSeconds(22), '22 giây trước');
  t.equal(tb.addSeconds(1), 'một lúc');
  t.equal(tb.addSeconds(10), 'trong 10 giây');
  t.equal(tb.addSeconds(21), 'trong 21 giây');
  t.equal(tb.addSeconds(22), 'trong 22 giây');

  // test minute
  t.equal(tb.subMinutes(1), '1 phút trước');
  t.equal(tb.subMinutes(2), '2 phút trước');
  t.equal(tb.subMinutes(5), '5 phút trước');
  t.equal(tb.subMinutes(21), '21 phút trước');
  t.equal(tb.addMinutes(1), 'trong 1 phút');
  t.equal(tb.addMinutes(2), 'trong 2 phút');
  t.equal(tb.addMinutes(5), 'trong 5 phút');
  t.equal(tb.addMinutes(21), 'trong 21 phút');
  
  // test hour
  t.equal(tb.subHours(1), '1 giờ trước');
  t.equal(tb.subHours(2), '2 giờ trước');
  t.equal(tb.subHours(5), '5 giờ trước');
  t.equal(tb.subHours(21), '21 giờ trước');
  t.equal(tb.addHours(1), 'trong 1 giờ');
  t.equal(tb.addHours(2), 'trong 2 giờ');
  t.equal(tb.addHours(5), 'trong 5 giờ');
  t.equal(tb.addHours(21), 'trong 21 giờ');

  // test day
  t.equal(tb.subDays(1), '1 ngày trước');
  t.equal(tb.subDays(2), '2 ngày trước');
  t.equal(tb.subDays(5), '5 ngày trước');
  t.equal(tb.addDays(1), 'trong 1 ngày');
  t.equal(tb.addDays(2), 'trong 2 ngày');
  t.equal(tb.addDays(5), 'trong 5 ngày');

  // test week
  t.equal(tb.subWeeks(1), '1 tuần trước');
  t.equal(tb.subWeeks(2), '2 tuần trước');
  t.equal(tb.addWeeks(1), 'trong 1 tuần');
  t.equal(tb.addWeeks(2), 'trong 2 tuần');

  // test month
  t.equal(tb.subMonths(1), '1 tháng trước');
  t.equal(tb.subMonths(2), '2 tháng trước');
  t.equal(tb.subMonths(5), '5 tháng trước');
  t.equal(tb.addMonths(1), 'trong 1 tháng');
  t.equal(tb.addMonths(2), 'trong 2 tháng');
  t.equal(tb.addMonths(5), 'trong 5 tháng');

  // test year
  t.equal(tb.subYears(1), '1 năm trước');
  t.equal(tb.subYears(2), '2 năm trước');
  t.equal(tb.subYears(5), '5 năm trước');
  t.equal(tb.subYears(21), '21 năm trước');
  t.equal(tb.addYears(1), 'trong 1 năm');
  t.equal(tb.addYears(2), 'trong 2 năm');
  t.equal(tb.addYears(5), 'trong 5 năm');
  t.equal(tb.addYears(21), 'trong 21 năm');
};
