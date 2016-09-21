module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'just now');
  t.equal(tb.subSeconds(10), '10s ago');
  t.equal(tb.subSeconds(21), '21s ago');
  t.equal(tb.subSeconds(22), '22s ago');
  t.equal(tb.addSeconds(1), 'right now');
  t.equal(tb.addSeconds(10), 'in 10s');
  t.equal(tb.addSeconds(21), 'in 21s');
  t.equal(tb.addSeconds(22), 'in 22s');

  // test minute
  t.equal(tb.subMinutes(1), '1m ago');
  t.equal(tb.subMinutes(2), '2m ago');
  t.equal(tb.subMinutes(5), '5m ago');
  t.equal(tb.subMinutes(21), '21m ago');
  t.equal(tb.addMinutes(1), 'in 1m');
  t.equal(tb.addMinutes(2), 'in 2m');
  t.equal(tb.addMinutes(5), 'in 5m');
  t.equal(tb.addMinutes(21), 'in 21m');
  
  // test hour
  t.equal(tb.subHours(1), '1h ago');
  t.equal(tb.subHours(2), '2h ago');
  t.equal(tb.subHours(5), '5h ago');
  t.equal(tb.subHours(21), '21h ago');
  t.equal(tb.addHours(1), 'in 1h');
  t.equal(tb.addHours(2), 'in 2h');
  t.equal(tb.addHours(5), 'in 5h');
  t.equal(tb.addHours(21), 'in 21h');

  // test day
  t.equal(tb.subDays(1), '1d ago');
  t.equal(tb.subDays(2), '2d ago');
  t.equal(tb.subDays(5), '5d ago');
  t.equal(tb.addDays(1), 'in 1d');
  t.equal(tb.addDays(2), 'in 2d');
  t.equal(tb.addDays(5), 'in 5d');

  // test week
  t.equal(tb.subWeeks(1), '1w ago');
  t.equal(tb.subWeeks(2), '2w ago');
  t.equal(tb.addWeeks(1), 'in 1w');
  t.equal(tb.addWeeks(2), 'in 2w');

  // test month
  t.equal(tb.subMonths(1), '1mo ago');
  t.equal(tb.subMonths(2), '2mo ago');
  t.equal(tb.subMonths(5), '5mo ago');
  t.equal(tb.addMonths(1), 'in 1mo');
  t.equal(tb.addMonths(2), 'in 2mo');
  t.equal(tb.addMonths(5), 'in 5mo');

  // test year
  t.equal(tb.subYears(1), '1yr ago');
  t.equal(tb.subYears(2), '2yr ago');
  t.equal(tb.subYears(5), '5yr ago');
  t.equal(tb.subYears(21), '21yr ago');
  t.equal(tb.addYears(1), 'in 1yr');
  t.equal(tb.addYears(2), 'in 2yr');
  t.equal(tb.addYears(5), 'in 5yr');
  t.equal(tb.addYears(21), 'in 21yr');
};