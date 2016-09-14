var timeago = require('../../');

module.exports = function(t) {
  var tm = timeago('2016-06-20 12:30:00', 'nb_NO');
  tm.register('nb_NO', require('../../locales/nb_NO'));

  // test second
  t.equal(tm.format('2016-06-20 12:30:00'), 'akkurat nå');
  t.equal(tm.format('2016-06-20 12:29:50'), '10 sekunder siden');
  t.equal(tm.format('2016-06-20 12:29:39'), '21 sekunder siden');
  t.equal(tm.format('2016-06-20 12:29:38'), '22 sekunder siden');
  t.equal(tm.format('2016-06-20 12:30:01'), 'om litt');
  t.equal(tm.format('2016-06-20 12:30:10'), 'om 10 sekunder');
  t.equal(tm.format('2016-06-20 12:30:21'), 'om 21 sekunder');
  t.equal(tm.format('2016-06-20 12:30:22'), 'om 22 sekunder');

  // test minute
  t.equal(tm.format('2016-06-20 12:29:00'), '1 minutt siden');
  t.equal(tm.format('2016-06-20 12:28:00'), '2 minutter siden');
  t.equal(tm.format('2016-06-20 12:25:00'), '5 minutter siden');
  t.equal(tm.format('2016-06-20 12:9:00'), '21 minutter siden');
  t.equal(tm.format('2016-06-20 12:31:00'), 'om 1 minutt');
  t.equal(tm.format('2016-06-20 12:32:00'), 'om 2 minutter');
  t.equal(tm.format('2016-06-20 12:35:00'), 'om 5 minutter');
  t.equal(tm.format('2016-06-20 12:51:00'), 'om 21 minutter');
  
  // test hour
  t.equal(tm.format('2016-06-20 11:30:00'), '1 time siden');
  t.equal(tm.format('2016-06-20 10:30:00'), '2 timer siden');
  t.equal(tm.format('2016-06-20 7:30:00'), '5 timer siden');
  t.equal(tm.format('2016-06-19 15:30:00'), '21 timer siden');
  t.equal(tm.format('2016-06-20 13:30:00'), 'om 1 time');
  t.equal(tm.format('2016-06-20 14:30:00'), 'om 2 timer');
  t.equal(tm.format('2016-06-20 17:30:00'), 'om 5 timer');
  t.equal(tm.format('2016-06-21 9:30:00'), 'om 21 timer');

  // test day
  t.equal(tm.format('2016-06-19 12:30:00'), '1 dag siden');
  t.equal(tm.format('2016-06-18 12:30:00'), '2 dager siden');
  t.equal(tm.format('2016-06-15 12:30:00'), '5 dager siden');
  t.equal(tm.format('2016-06-21 12:30:00'), 'om 1 dag');
  t.equal(tm.format('2016-06-22 12:30:00'), 'om 2 dager');
  t.equal(tm.format('2016-06-25 12:30:00'), 'om 5 dager');

  // test week
  t.equal(tm.format('2016-06-13 12:30:00'), '1 uke siden');
  t.equal(tm.format('2016-06-06 12:30:00'), '2 uker siden');
  t.equal(tm.format('2016-06-27 12:30:00'), 'om 1 uke');
  t.equal(tm.format('2016-07-04 12:30:00'), 'om 2 uker');

  // test month
  t.equal(tm.format('2016-05-20 12:30:00'), '1 måned siden');
  t.equal(tm.format('2016-04-20 12:30:00'), '2 måneder siden');
  t.equal(tm.format('2016-01-19 12:30:00'), '5 måneder siden');
  t.equal(tm.format('2016-07-21 12:30:00'), 'om 1 måned');
  t.equal(tm.format('2016-08-20 12:30:00'), 'om 2 måneder');
  t.equal(tm.format('2016-11-20 12:30:00'), 'om 5 måneder');

  // test year
  t.equal(tm.format('2015-06-20 12:30:00'), '1 år siden');
  t.equal(tm.format('2014-06-20 12:30:00'), '2 år siden');
  t.equal(tm.format('2011-06-20 12:30:00'), '5 år siden');
  t.equal(tm.format('1995-06-20 12:30:00'), '21 år siden');
  t.equal(tm.format('2017-06-20 12:30:00'), 'om 1 år');
  t.equal(tm.format('2018-06-20 12:30:00'), 'om 2 år');
  t.equal(tm.format('2021-06-20 12:30:00'), 'om 5 år');
  t.equal(tm.format('2037-06-20 12:30:00'), 'om 21 år');
};