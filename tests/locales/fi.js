module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'juuri äsken');
  t.equal(tb.subSeconds(22), '22 sekuntia sitten');
  t.equal(tb.addSeconds(1), 'juuri nyt');
  t.equal(tb.addSeconds(22), '22 sekunnin päästä');

  // test minute
  t.equal(tb.subMinutes(1), 'minuutti sitten');
  t.equal(tb.subMinutes(2), '2 minuuttia sitten');
  t.equal(tb.addMinutes(1), 'minuutin päästä');
  t.equal(tb.addMinutes(21), '21 minuutin päästä');
  
  // test hour
  t.equal(tb.subHours(1), 'tunti sitten');
  t.equal(tb.subHours(2), '2 tuntia sitten');
  t.equal(tb.addHours(1), 'tunnin päästä');
  t.equal(tb.addHours(21), '21 tunnin päästä');

  // test day
  t.equal(tb.subDays(1), 'päivä sitten');
  t.equal(tb.subDays(2), '2 päivää sitten');
  t.equal(tb.addDays(1), 'päivän päästä');
  t.equal(tb.addDays(2), '2 päivän päästä');

  // test week
  t.equal(tb.subWeeks(1), 'viikko sitten');
  t.equal(tb.subWeeks(2), '2 viikkoa sitten');
  t.equal(tb.addWeeks(1), 'viikon päästä');
  t.equal(tb.addWeeks(2), '2 viikon päästä');

  // test month
  t.equal(tb.subMonths(1), 'kuukausi sitten');
  t.equal(tb.subMonths(2), '2 kuukautta sitten');
  t.equal(tb.addMonths(1), 'kuukauden päästä');
  t.equal(tb.addMonths(2), '2 kuukauden päästä');

  // test year
  t.equal(tb.subYears(1), 'vuosi sitten');
  t.equal(tb.subYears(2), '2 vuotta sitten');
  t.equal(tb.addYears(1), 'vuoden päästä');
  t.equal(tb.addYears(2), '2 vuoden päästä');
};
