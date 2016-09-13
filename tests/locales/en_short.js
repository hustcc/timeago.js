var timeago = require('../../');

module.exports = function(t) {
  var tm = timeago('2016-06-20 12:30:00', 'en_short');
  tm.register('en_short', require('../../locales/en_short'));

  // test second
  t.equal(tm.format('2016-06-20 12:30:00'), 'just now');
  t.equal(tm.format('2016-06-20 12:29:50'), '10s ago');
  t.equal(tm.format('2016-06-20 12:29:39'), '21s ago');
  t.equal(tm.format('2016-06-20 12:29:38'), '22s ago');
  t.equal(tm.format('2016-06-20 12:30:01'), 'a while');
  t.equal(tm.format('2016-06-20 12:30:10'), 'in 10s');
  t.equal(tm.format('2016-06-20 12:30:21'), 'in 21s');
  t.equal(tm.format('2016-06-20 12:30:22'), 'in 22s');

  // test minute
  t.equal(tm.format('2016-06-20 12:29:00'), '1m ago');
  t.equal(tm.format('2016-06-20 12:28:00'), '2m ago');
  t.equal(tm.format('2016-06-20 12:25:00'), '5m ago');
  t.equal(tm.format('2016-06-20 12:9:00'), '21m ago');
  t.equal(tm.format('2016-06-20 12:31:00'), 'in 1m');
  t.equal(tm.format('2016-06-20 12:32:00'), 'in 2m');
  t.equal(tm.format('2016-06-20 12:35:00'), 'in 5m');
  t.equal(tm.format('2016-06-20 12:51:00'), 'in 21m');
  
  // test hour
  t.equal(tm.format('2016-06-20 11:30:00'), '1h ago');
  t.equal(tm.format('2016-06-20 10:30:00'), '2h ago');
  t.equal(tm.format('2016-06-20 7:30:00'), '5h ago');
  t.equal(tm.format('2016-06-19 15:30:00'), '21h ago');
  t.equal(tm.format('2016-06-20 13:30:00'), 'in 1h');
  t.equal(tm.format('2016-06-20 14:30:00'), 'in 2h');
  t.equal(tm.format('2016-06-20 17:30:00'), 'in 5h');
  t.equal(tm.format('2016-06-21 9:30:00'), 'in 21h');

  // test day
  t.equal(tm.format('2016-06-19 12:30:00'), '1d ago');
  t.equal(tm.format('2016-06-18 12:30:00'), '2d ago');
  t.equal(tm.format('2016-06-15 12:30:00'), '5d ago');
  t.equal(tm.format('2016-06-21 12:30:00'), 'in 1d');
  t.equal(tm.format('2016-06-22 12:30:00'), 'in 2d');
  t.equal(tm.format('2016-06-25 12:30:00'), 'in 5d');

  // test week
  t.equal(tm.format('2016-06-13 12:30:00'), '1w ago');
  t.equal(tm.format('2016-06-06 12:30:00'), '2w ago');
  t.equal(tm.format('2016-06-27 12:30:00'), 'in 1w');
  t.equal(tm.format('2016-07-04 12:30:00'), 'in 2w');

  // test month
  t.equal(tm.format('2016-05-20 12:30:00'), '1mo ago');
  t.equal(tm.format('2016-04-20 12:30:00'), '2mo ago');
  t.equal(tm.format('2016-01-19 12:30:00'), '5mo ago');
  t.equal(tm.format('2016-07-21 12:30:00'), 'in 1mo');
  t.equal(tm.format('2016-08-20 12:30:00'), 'in 2mo');
  t.equal(tm.format('2016-11-20 12:30:00'), 'in 5mo');

  // test year
  t.equal(tm.format('2015-06-20 12:30:00'), '1yr ago');
  t.equal(tm.format('2014-06-20 12:30:00'), '2yr ago');
  t.equal(tm.format('2011-06-20 12:30:00'), '5yr ago');
  t.equal(tm.format('1995-06-20 12:30:00'), '21yr ago');
  t.equal(tm.format('2017-06-20 12:30:00'), 'in 1yr');
  t.equal(tm.format('2018-06-20 12:30:00'), 'in 2yr');
  t.equal(tm.format('2021-06-20 12:30:00'), 'in 5yr');
  t.equal(tm.format('2037-06-20 12:30:00'), 'in 21yr');
};