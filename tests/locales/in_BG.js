module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'এইমাত্র');
  t.equal(tb.subSeconds(10),  '10 সেকেন্ড আগে');
  t.equal(tb.subSeconds(21), '21 সেকেন্ড আগে');
  t.equal(tb.subSeconds(22), '22 সেকেন্ড আগে');
  t.equal(tb.addSeconds(1), 'একটা সময়');
  t.equal(tb.addSeconds(10), '10 এর সেকেন্ডের মধ্যে');
  t.equal(tb.addSeconds(21), '21 এর সেকেন্ডের মধ্যে');
  t.equal(tb.addSeconds(22), '22 এর সেকেন্ডের মধ্যে');

  // test minute
  t.equal(tb.subMinutes(1), '1 মিনিট আগে');
  t.equal(tb.subMinutes(2), '2 এর মিনিট আগে');
  t.equal(tb.subMinutes(5), '5 এর মিনিট আগে');
  t.equal(tb.subMinutes(21), '21 এর মিনিট আগে');
  t.equal(tb.addMinutes(1), '1 মিনিটে');
  t.equal(tb.addMinutes(2), '2 এর মিনিটের মধ্যে');
  t.equal(tb.addMinutes(5), '5 এর মিনিটের মধ্যে');
  t.equal(tb.addMinutes(21), '21 এর মিনিটের মধ্যে');

  // test hour
  t.equal(tb.subHours(1), '1 ঘন্টা আগে');
  t.equal(tb.subHours(2), '2 ঘণ্টা আগে');
  t.equal(tb.subHours(5), '5 ঘণ্টা আগে');
  t.equal(tb.subHours(21), '21 ঘণ্টা আগে');
  t.equal(tb.addHours(1), '1 ঘন্টা');
  t.equal(tb.addHours(2), '2 এর ঘন্টার মধ্যে');
  t.equal(tb.addHours(5), '5 এর ঘন্টার মধ্যে');
  t.equal(tb.addHours(21), '21 এর ঘন্টার মধ্যে');

  // test day
  t.equal(tb.subDays(1), '1 দিন আগে');
  t.equal(tb.subDays(2), '2 এর দিন আগে');
  t.equal(tb.subDays(5), '5 এর দিন আগে');
  t.equal(tb.addDays(1), '1 দিনের মধ্যে');
  t.equal(tb.addDays(2), '2 এর দিন');
  t.equal(tb.addDays(5), '5 এর দিন');

  // test week
  t.equal(tb.subWeeks(1), '1 সপ্তাহ আগে');
  t.equal(tb.subWeeks(2), '2 এর সপ্তাহ আগে');
  t.equal(tb.addWeeks(1), '1 সপ্তাহের মধ্যে');
  t.equal(tb.addWeeks(2), '2 সপ্তাহের মধ্যে');

  // test month
  t.equal(tb.subMonths(1), '1 মাস আগে');
  t.equal(tb.subMonths(2), '2 মাস আগে');
  t.equal(tb.subMonths(5), '5 মাস আগে');
  t.equal(tb.addMonths(1), '1 মাসে');
  t.equal(tb.addMonths(2), '2 মাসে');
  t.equal(tb.addMonths(5), '5 মাসে');

  // test year
  t.equal(tb.subYears(1), '1 বছর আগে');
  t.equal(tb.subYears(2), '2 বছর আগে');
  t.equal(tb.subYears(5), '5 বছর আগে');
  t.equal(tb.subYears(21), '21 বছর আগে');
  t.equal(tb.addYears(1), '1 বছরের মধ্যে');
  t.equal(tb.addYears(2), '2 বছরে');
  t.equal(tb.addYears(5), '5 বছরে');
  t.equal(tb.addYears(21), '21 বছরে');
};
