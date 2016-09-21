module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'just now');
  t.equal(tb.subSeconds(10),  '10 seconds ago');
  t.equal(tb.subSeconds(21), '21 seconds ago');
  t.equal(tb.subSeconds(22), '22 seconds ago');
  t.equal(tb.addSeconds(1), 'right now');
  t.equal(tb.addSeconds(10), 'in 10 seconds');
  t.equal(tb.addSeconds(21), 'in 21 seconds');
  t.equal(tb.addSeconds(22), 'in 22 seconds');

  // test minute
  t.equal(tb.subMinutes(1), '1 minute ago');
  t.equal(tb.subMinutes(2), '2 minutes ago');
  t.equal(tb.subMinutes(5), '5 minutes ago');
  t.equal(tb.subMinutes(21), '21 minutes ago');
  t.equal(tb.addMinutes(1), 'in 1 minute');
  t.equal(tb.addMinutes(2), 'in 2 minutes');
  t.equal(tb.addMinutes(5), 'in 5 minutes');
  t.equal(tb.addMinutes(21), 'in 21 minutes');
  
  // test hour
  t.equal(tb.subHours(1), '1 hour ago');
  t.equal(tb.subHours(2), '2 hours ago');
  t.equal(tb.subHours(5), '5 hours ago');
  t.equal(tb.subHours(21), '21 hours ago');
  t.equal(tb.addHours(1), 'in 1 hour');
  t.equal(tb.addHours(2), 'in 2 hours');
  t.equal(tb.addHours(5), 'in 5 hours');
  t.equal(tb.addHours(21), 'in 21 hours');

  // test day
  t.equal(tb.subDays(1), '1 day ago');
  t.equal(tb.subDays(2), '2 days ago');
  t.equal(tb.subDays(5), '5 days ago');
  t.equal(tb.addDays(1), 'in 1 day');
  t.equal(tb.addDays(2), 'in 2 days');
  t.equal(tb.addDays(5), 'in 5 days');

  // test week
  t.equal(tb.subWeeks(1), '1 week ago');
  t.equal(tb.subWeeks(2), '2 weeks ago');
  t.equal(tb.addWeeks(1), 'in 1 week');
  t.equal(tb.addWeeks(2), 'in 2 weeks');

  // test month
  t.equal(tb.subMonths(1), '1 month ago');
  t.equal(tb.subMonths(2), '2 months ago');
  t.equal(tb.subMonths(5), '5 months ago');
  t.equal(tb.addMonths(1), 'in 1 month');
  t.equal(tb.addMonths(2), 'in 2 months');
  t.equal(tb.addMonths(5), 'in 5 months');

  // test year
  t.equal(tb.subYears(1), '1 year ago');
  t.equal(tb.subYears(2), '2 years ago');
  t.equal(tb.subYears(5), '5 years ago');
  t.equal(tb.subYears(21), '21 years ago');
  t.equal(tb.addYears(1), 'in 1 year');
  t.equal(tb.addYears(2), 'in 2 years');
  t.equal(tb.addYears(5), 'in 5 years');
  t.equal(tb.addYears(21), 'in 21 years');
};