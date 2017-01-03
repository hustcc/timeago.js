module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'w tej chwili');
  t.equal(tb.subSeconds(10), '10 sekund temu');
  t.equal(tb.subSeconds(12), '12 sekund temu');
  t.equal(tb.subSeconds(22), '22 sekundy temu');
  t.equal(tb.subSeconds(25), '25 sekund temu');
  t.equal(tb.addSeconds(1), 'za chwilę');
  t.equal(tb.addSeconds(10), 'za 10 sekund');
  t.equal(tb.addSeconds(12), 'za 12 sekund');
  t.equal(tb.addSeconds(22), 'za 22 sekundy');
  t.equal(tb.addSeconds(25), 'za 25 sekund');

  // test minute
  t.equal(tb.subMinutes(1), '1 minutę temu');
  t.equal(tb.subMinutes(2), '2 minuty temu');
  t.equal(tb.subMinutes(5), '5 minut temu');
  t.equal(tb.subMinutes(12), '12 minut temu');
  t.equal(tb.subMinutes(21), '21 minut temu');
  t.equal(tb.subMinutes(22), '22 minuty temu');
  t.equal(tb.subMinutes(25), '25 minut temu');
  t.equal(tb.addMinutes(1), 'za 1 minutę');
  t.equal(tb.addMinutes(2), 'za 2 minuty');
  t.equal(tb.addMinutes(5), 'za 5 minut');
  t.equal(tb.addMinutes(12), 'za 12 minut');
  t.equal(tb.addMinutes(21), 'za 21 minut');
  t.equal(tb.addMinutes(22), 'za 22 minuty');
  t.equal(tb.addMinutes(25), 'za 25 minut');

  // test hour
  t.equal(tb.subHours(1), '1 godzinę temu');
  t.equal(tb.subHours(2), '2 godziny temu');
  t.equal(tb.subHours(5), '5 godzin temu');
  t.equal(tb.subHours(21), '21 godzin temu');
  t.equal(tb.subHours(22), '22 godziny temu');
  t.equal(tb.addHours(1), 'za 1 godzinę');
  t.equal(tb.addHours(2), 'za 2 godziny');
  t.equal(tb.addHours(5), 'za 5 godzin');
  t.equal(tb.addHours(21), 'za 21 godzin');
  t.equal(tb.addHours(22), 'za 22 godziny');

  // test day
  t.equal(tb.subDays(1), '1 dzień temu');
  t.equal(tb.subDays(2), '2 dni temu');
  t.equal(tb.subDays(5), '5 dni temu');
  t.equal(tb.addDays(1), 'za 1 dzień');
  t.equal(tb.addDays(2), 'za 2 dni');
  t.equal(tb.addDays(5), 'za 5 dni');

  // test week
  t.equal(tb.subWeeks(1), '1 tydzień temu');
  t.equal(tb.subWeeks(2), '2 tygodnie temu');
  t.equal(tb.subWeeks(3), '3 tygodnie temu');
  t.equal(tb.subWeeks(4), '4 tygodnie temu');
  t.equal(tb.addWeeks(1), 'za 1 tydzień');
  t.equal(tb.addWeeks(2), 'za 2 tygodnie');
  t.equal(tb.addWeeks(3), 'za 3 tygodnie');
  t.equal(tb.addWeeks(4), 'za 4 tygodnie');

  // test month
  t.equal(tb.subMonths(1), '1 miesiąc temu');
  t.equal(tb.subMonths(2), '2 miesiące temu');
  t.equal(tb.subMonths(5), '5 miesięcy temu');
  t.equal(tb.addMonths(1), 'za 1 miesiąc');
  t.equal(tb.addMonths(2), 'za 2 miesiące');
  t.equal(tb.add({months: 5, days: 1}), 'za 5 miesięcy'); // addMonths(5) reports in 4 months

  // test year
  t.equal(tb.subYears(1), '1 rok temu');
  t.equal(tb.subYears(2), '2 lata temu');
  t.equal(tb.subYears(5), '5 lat temu');
  t.equal(tb.subYears(12), '12 lat temu');
  t.equal(tb.subYears(21), '21 lat temu');
  t.equal(tb.subYears(22), '22 lata temu');
  t.equal(tb.subYears(100), '100 lat temu');
  t.equal(tb.subYears(101), '101 lat temu');
  t.equal(tb.subYears(102), '102 lata temu');
  t.equal(tb.subYears(112), '112 lat temu');
  t.equal(tb.subYears(122), '122 lata temu');
  t.equal(tb.addYears(1), 'za 1 rok');
  t.equal(tb.addYears(2), 'za 2 lata');
  t.equal(tb.addYears(5), 'za 5 lat');
  t.equal(tb.addYears(12), 'za 12 lat');
  t.equal(tb.addYears(21), 'za 21 lat');
  t.equal(tb.addYears(22), 'za 22 lata');
  t.equal(tb.addYears(100), 'za 100 lat');
  t.equal(tb.addYears(101), 'za 101 lat');
  t.equal(tb.addYears(102), 'za 102 lata');
  t.equal(tb.addYears(112), 'za 112 lat');
  t.equal(tb.addYears(122), 'za 122 lata');
};
