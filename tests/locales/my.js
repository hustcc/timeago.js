module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'ယခုအတွင်း');
  t.equal(tb.subSeconds(10),  '10 စက္ကန့် အကြာက');
  t.equal(tb.subSeconds(21), '21 စက္ကန့် အကြာက');
  t.equal(tb.subSeconds(22), '22 စက္ကန့် အကြာက');
  t.equal(tb.addSeconds(1), 'ယခု');
  t.equal(tb.addSeconds(10), '10 စက္ကန့်အတွင်း');
  t.equal(tb.addSeconds(21), '21 စက္ကန့်အတွင်း');
  t.equal(tb.addSeconds(22), '22 စက္ကန့်အတွင်း');

  // test minute
  t.equal(tb.subMinutes(1), '1 မိနစ် အကြာက');
  t.equal(tb.subMinutes(2), '2 မိနစ် အကြာက');
  t.equal(tb.subMinutes(5), '5 မိနစ် အကြာက');
  t.equal(tb.subMinutes(21), '21 မိနစ် အကြာက');
  t.equal(tb.addMinutes(1), '1 မိနစ်အတွင်း');
  t.equal(tb.addMinutes(2), '2 မိနစ်အတွင်း');
  t.equal(tb.addMinutes(5), '5 မိနစ်အတွင်း');
  t.equal(tb.addMinutes(21), '21 မိနစ်အတွင်း');

  // test hour
  t.equal(tb.subHours(1), '1 နာရီ အကြာက');
  t.equal(tb.subHours(2), '2 နာရီ အကြာက');
  t.equal(tb.subHours(5), '5 နာရီ အကြာက');
  t.equal(tb.subHours(21), '21 နာရီ အကြာက');
  t.equal(tb.addHours(1), '1 နာရီအတွင်း');
  t.equal(tb.addHours(2), '2 နာရီအတွင်း');
  t.equal(tb.addHours(5), '5 နာရီအတွင်း');
  t.equal(tb.addHours(21), '21 နာရီအတွင်း');

  // test day
  t.equal(tb.subDays(1), '1 ရက် အကြာက');
  t.equal(tb.subDays(2), '2 ရက် အကြာက');
  t.equal(tb.subDays(5), '5 ရက် အကြာက');
  t.equal(tb.addDays(1), '1 ရက်အတွင်း');
  t.equal(tb.addDays(2), '2 ရက်အတွင်း');
  t.equal(tb.addDays(5), '5 ရက်အတွင်း');

  // test week
  t.equal(tb.subWeeks(1), '1 ပတ် အကြာက');
  t.equal(tb.subWeeks(2), '2 ပတ် အကြာက');
  t.equal(tb.addWeeks(1), '1 ပတ်အတွင်း');
  t.equal(tb.addWeeks(2), '2 ပတ်အတွင်း');

  // test month
  t.equal(tb.subMonths(1), '1 လ အကြာက');
  t.equal(tb.subMonths(2), '2 လ အကြာက');
  t.equal(tb.subMonths(5), '5 လ အကြာက');
  t.equal(tb.addMonths(1), '1 လအတွင်း');
  t.equal(tb.addMonths(2), '2 လအတွင်း');
  t.equal(tb.addMonths(5), '5 လအတွင်း');

  // test year
  t.equal(tb.subYears(1), '1 နှစ် အကြာက');
  t.equal(tb.subYears(2), '2 နှစ် အကြာက');
  t.equal(tb.subYears(5), '5 နှစ် အကြာက');
  t.equal(tb.subYears(21), '21 နှစ် အကြာက');
  t.equal(tb.addYears(1), '1 နှစ်အတွင်း');
  t.equal(tb.addYears(2), '2 နှစ်အတွင်း');
  t.equal(tb.addYears(5), '5 နှစ်အတွင်း');
  t.equal(tb.addYears(21), '21 နှစ်အတွင်း');
};
