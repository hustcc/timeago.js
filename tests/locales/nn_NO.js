var timeago = require('../../');

module.exports = function(t) {
  var tm = timeago('2016-06-20 12:30:00', 'nn_NO');
  tm.register('nn_NO', require('../../locales/nn_NO'));

  // test second
  t.equal(tm.format('2016-06-20 12:30:00'), 'nett no');
  t.equal(tm.format('2016-06-20 12:29:50'), '10 sekund sidan');
  t.equal(tm.format('2016-06-20 12:29:39'), '21 sekund sidan');
  t.equal(tm.format('2016-06-20 12:29:38'), '22 sekund sidan');
  t.equal(tm.format('2016-06-20 12:30:01'), 'om litt');
  t.equal(tm.format('2016-06-20 12:30:10'), 'om 10 sekund');
  t.equal(tm.format('2016-06-20 12:30:21'), 'om 21 sekund');
  t.equal(tm.format('2016-06-20 12:30:22'), 'om 22 sekund');

  // test minute
  t.equal(tm.format('2016-06-20 12:29:00'), '1 minutt sidan');
  t.equal(tm.format('2016-06-20 12:28:00'), '2 minutt sidan');
  t.equal(tm.format('2016-06-20 12:25:00'), '5 minutt sidan');
  t.equal(tm.format('2016-06-20 12:9:00'), '21 minutt sidan');
  t.equal(tm.format('2016-06-20 12:31:00'), 'om 1 minutt');
  t.equal(tm.format('2016-06-20 12:32:00'), 'om 2 minutt');
  t.equal(tm.format('2016-06-20 12:35:00'), 'om 5 minutt');
  t.equal(tm.format('2016-06-20 12:51:00'), 'om 21 minutt');
  
  // test hour
  t.equal(tm.format('2016-06-20 11:30:00'), '1 time sidan');
  t.equal(tm.format('2016-06-20 10:30:00'), '2 timar sidan');
  t.equal(tm.format('2016-06-20 7:30:00'), '5 timar sidan');
  t.equal(tm.format('2016-06-19 15:30:00'), '21 timar sidan');
  t.equal(tm.format('2016-06-20 13:30:00'), 'om 1 time');
  t.equal(tm.format('2016-06-20 14:30:00'), 'om 2 timar');
  t.equal(tm.format('2016-06-20 17:30:00'), 'om 5 timar');
  t.equal(tm.format('2016-06-21 9:30:00'), 'om 21 timar');

  // test day
  t.equal(tm.format('2016-06-19 12:30:00'), '1 dag sidan');
  t.equal(tm.format('2016-06-18 12:30:00'), '2 dagar sidan');
  t.equal(tm.format('2016-06-15 12:30:00'), '5 dagar sidan');
  t.equal(tm.format('2016-06-21 12:30:00'), 'om 1 dag');
  t.equal(tm.format('2016-06-22 12:30:00'), 'om 2 dagar');
  t.equal(tm.format('2016-06-25 12:30:00'), 'om 5 dagar');

  // test week
  t.equal(tm.format('2016-06-13 12:30:00'), '1 veke sidan');
  t.equal(tm.format('2016-06-06 12:30:00'), '2 veker sidan');
  t.equal(tm.format('2016-06-27 12:30:00'), 'om 1 veke');
  t.equal(tm.format('2016-07-04 12:30:00'), 'om 2 veker');

  // test month
  t.equal(tm.format('2016-05-20 12:30:00'), '1 månad sidan');
  t.equal(tm.format('2016-04-20 12:30:00'), '2 månadar sidan');
  t.equal(tm.format('2016-01-19 12:30:00'), '5 månadar sidan');
  t.equal(tm.format('2016-07-21 12:30:00'), 'om 1 månad');
  t.equal(tm.format('2016-08-20 12:30:00'), 'om 2 månadar');
  t.equal(tm.format('2016-11-20 12:30:00'), 'om 5 månadar');

  // test year
  t.equal(tm.format('2015-06-20 12:30:00'), '1 år sidan');
  t.equal(tm.format('2014-06-20 12:30:00'), '2 år sidan');
  t.equal(tm.format('2011-06-20 12:30:00'), '5 år sidan');
  t.equal(tm.format('1995-06-20 12:30:00'), '21 år sidan');
  t.equal(tm.format('2017-06-20 12:30:00'), 'om 1 år');
  t.equal(tm.format('2018-06-20 12:30:00'), 'om 2 år');
  t.equal(tm.format('2021-06-20 12:30:00'), 'om 5 år');
  t.equal(tm.format('2037-06-20 12:30:00'), 'om 21 år');
};