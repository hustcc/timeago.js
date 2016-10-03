module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'זה עתה');
  t.equal(tb.subSeconds(10), 'לפני 10 שניות');
  t.equal(tb.subSeconds(21), 'לפני 21 שניות');
  t.equal(tb.subSeconds(22), 'לפני 22 שניות');
  t.equal(tb.addSeconds(1), 'עכשיו');
  t.equal(tb.addSeconds(10), 'בעוד 10 שניות');
  t.equal(tb.addSeconds(21), 'בעוד 21 שניות');
  t.equal(tb.addSeconds(22), 'בעוד 22 שניות');

  // test minute
  t.equal(tb.subMinutes(1), 'לפני דקה');
  t.equal(tb.subMinutes(2), 'לפני 2 דקות');
  t.equal(tb.subMinutes(5), 'לפני 5 דקות');
  t.equal(tb.subMinutes(21), 'לפני 21 דקות');
  t.equal(tb.addMinutes(1), 'בעוד דקה');
  t.equal(tb.addMinutes(2), 'בעוד 2 דקות');
  t.equal(tb.addMinutes(5), 'בעוד 5 דקות');
  t.equal(tb.addMinutes(21), 'בעוד 21 דקות');
  
  // test hour
  t.equal(tb.subHours(1), 'לפני שעה');
  t.equal(tb.subHours(2), 'לפני 2 שעות');
  t.equal(tb.subHours(5), 'לפני 5 שעות');
  t.equal(tb.subHours(21), 'לפני 21 שעות');
  t.equal(tb.addHours(1), 'בעוד שעה');
  t.equal(tb.addHours(2), 'בעוד 2 שעות');
  t.equal(tb.addHours(5), 'בעוד 5 שעות');
  t.equal(tb.addHours(21), 'בעוד 21 שעות');
  //
  // test day
  t.equal(tb.subDays(1), 'אתמול');
  t.equal(tb.subDays(2), 'לפני 2 ימים');
  t.equal(tb.subDays(5), 'לפני 5 ימים');
  t.equal(tb.addDays(1), 'מחר');
  t.equal(tb.addDays(2), 'בעוד 2 ימים');
  t.equal(tb.addDays(5), 'בעוד 5 ימים');

  // test week
  t.equal(tb.subWeeks(1), 'לפני שבוע');
  t.equal(tb.subWeeks(2), 'לפני 2 שבועות');
  t.equal(tb.addWeeks(1), 'בעוד שבוע');
  t.equal(tb.addWeeks(2), 'בעוד 2 שבועות');

  // test month
  t.equal(tb.subMonths(1), 'לפני חודש');
  t.equal(tb.subMonths(2), 'לפני 2 חודשים');
  t.equal(tb.subMonths(5), 'לפני 5 חודשים');
  t.equal(tb.addMonths(1), 'בעוד חודש');
  t.equal(tb.addMonths(2), 'בעוד 2 חודשים');
  t.equal(tb.addMonths(5), 'בעוד 5 חודשים');

  // test year
  t.equal(tb.subYears(1), 'לפני שנה');
  t.equal(tb.subYears(2), 'לפני 2 שנים');
  t.equal(tb.subYears(5), 'לפני 5 שנים');
  t.equal(tb.subYears(21), 'לפני 21 שנים');
  t.equal(tb.addYears(1), 'בעוד שנה');
  t.equal(tb.addYears(2), 'בעוד 2 שנים');
  t.equal(tb.addYears(5), 'בעוד 5 שנים');
  t.equal(tb.addYears(21), 'בעוד 21 שנים');
};