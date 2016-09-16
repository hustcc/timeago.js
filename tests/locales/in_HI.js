module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'अभी');
  t.equal(tb.subSeconds(10), '10 सेकंड पहले');
  t.equal(tb.subSeconds(21), '21 सेकंड पहले');
  t.equal(tb.subSeconds(22), '22 सेकंड पहले');
  t.equal(tb.addSeconds(1), 'कुछ समय');
  t.equal(tb.addSeconds(10), '10 सेकंड में');
  t.equal(tb.addSeconds(21), '21 सेकंड में');
  t.equal(tb.addSeconds(22), '22 सेकंड में');

  // test minute
  t.equal(tb.subMinutes(1), '1 मिनट पहले');
  t.equal(tb.subMinutes(2), '2 मिनट पहले');
  t.equal(tb.subMinutes(5), '5 मिनट पहले');
  t.equal(tb.subMinutes(21), '21 मिनट पहले');
  t.equal(tb.addMinutes(1), '1 मिनट में');
  t.equal(tb.addMinutes(2), '2 मिनट में');
  t.equal(tb.addMinutes(5), '5 मिनट में');
  t.equal(tb.addMinutes(21), '21 मिनट में');

  // test hour
  t.equal(tb.subHours(1), '1 घंटे पहले');
  t.equal(tb.subHours(2), '2 घंटे पहले');
  t.equal(tb.subHours(5), '5 घंटे पहले');
  t.equal(tb.subHours(21), '21 घंटे पहले');
  t.equal(tb.addHours(1), '1 घंटे में');
  t.equal(tb.addHours(2), '2 घंटे में');
  t.equal(tb.addHours(5), '5 घंटे में');
  t.equal(tb.addHours(21), '21 घंटे में');

  // test day
  t.equal(tb.subDays(1), '1 दिन पहले');
  t.equal(tb.subDays(2), '2 दिन पहले');
  t.equal(tb.subDays(5), '5 दिन पहले');
  t.equal(tb.addDays(1), '1 दिन में');
  t.equal(tb.addDays(2), '2 दिनों में');
  t.equal(tb.addDays(5), '5 दिनों में');

  // test week
  t.equal(tb.subWeeks(1), '1 सप्ताह पहले');
  t.equal(tb.subWeeks(2), '2 हफ्ते पहले');
  t.equal(tb.addWeeks(1), '1 सप्ताह में');
  t.equal(tb.addWeeks(2), '2 हफ्तों में');

  // test month
  t.equal(tb.subMonths(1), '1 महीने पहले');
  t.equal(tb.subMonths(2), '2 महीने पहले');
  t.equal(tb.subMonths(5), '5 महीने पहले');
  t.equal(tb.addMonths(1), '1 महीने में');
  t.equal(tb.addMonths(2), '2 महीनों में');
  t.equal(tb.addMonths(5), '5 महीनों में');

  // test year
  t.equal(tb.subYears(1), '1 साल पहले');
  t.equal(tb.subYears(2), '2 साल पहले');
  t.equal(tb.subYears(5), '5 साल पहले');
  t.equal(tb.subYears(21), '21 साल पहले');
  t.equal(tb.addYears(1), '1 साल में');
  t.equal(tb.addYears(2), '2 साल में');
  t.equal(tb.addYears(5), '5 साल में');
  t.equal(tb.addYears(21), '21 साल में');
};
