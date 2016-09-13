var timeago = require('../../');

module.exports = function(t) {
  var tm = timeago('2016-06-20 12:30:00', 'en');
  tm.register('en', require('../../locales/en'));

  // test second
  t.equal(tm.format('2016-06-20 12:30:00'), 'just now');
  t.equal(tm.format('2016-06-20 12:29:50'), '10 seconds ago');
  t.equal(tm.format('2016-06-20 12:29:39'), '21 seconds ago');
  t.equal(tm.format('2016-06-20 12:29:38'), '22 seconds ago');
  t.equal(tm.format('2016-06-20 12:30:01'), 'a while');
  t.equal(tm.format('2016-06-20 12:30:10'), 'in 10 seconds');
  t.equal(tm.format('2016-06-20 12:30:21'), 'in 21 seconds');
  t.equal(tm.format('2016-06-20 12:30:22'), 'in 22 seconds');

  // test minute
  t.equal(tm.format('2016-06-20 12:29:00'), '1 minute ago');
  t.equal(tm.format('2016-06-20 12:28:00'), '2 minutes ago');
  t.equal(tm.format('2016-06-20 12:25:00'), '5 minutes ago');
  t.equal(tm.format('2016-06-20 12:9:00'), '21 minutes ago');
  t.equal(tm.format('2016-06-20 12:31:00'), 'in 1 minute');
  t.equal(tm.format('2016-06-20 12:32:00'), 'in 2 minutes');
  t.equal(tm.format('2016-06-20 12:35:00'), 'in 5 minutes');
  t.equal(tm.format('2016-06-20 12:51:00'), 'in 21 minutes');
  
  // test hour
  t.equal(tm.format('2016-06-20 11:30:00'), '1 hour ago');
  t.equal(tm.format('2016-06-20 10:30:00'), '2 hours ago');
  t.equal(tm.format('2016-06-20 7:30:00'), '5 hours ago');
  t.equal(tm.format('2016-06-19 15:30:00'), '21 hours ago');
  t.equal(tm.format('2016-06-20 13:30:00'), 'in 1 hour');
  t.equal(tm.format('2016-06-20 14:30:00'), 'in 2 hours');
  t.equal(tm.format('2016-06-20 17:30:00'), 'in 5 hours');
  t.equal(tm.format('2016-06-21 9:30:00'), 'in 21 hours');

  // test day
  t.equal(tm.format('2016-06-19 12:30:00'), '1 day ago');
  t.equal(tm.format('2016-06-18 12:30:00'), '2 days ago');
  t.equal(tm.format('2016-06-15 12:30:00'), '5 days ago');
  t.equal(tm.format('2016-06-21 12:30:00'), 'in 1 day');
  t.equal(tm.format('2016-06-22 12:30:00'), 'in 2 days');
  t.equal(tm.format('2016-06-25 12:30:00'), 'in 5 days');

  // test week
  t.equal(tm.format('2016-06-13 12:30:00'), '1 week ago');
  t.equal(tm.format('2016-06-06 12:30:00'), '2 weeks ago');
  t.equal(tm.format('2016-06-27 12:30:00'), 'in 1 week');
  t.equal(tm.format('2016-07-04 12:30:00'), 'in 2 weeks');

  // test month
  t.equal(tm.format('2016-05-20 12:30:00'), '1 month ago');
  t.equal(tm.format('2016-04-20 12:30:00'), '2 months ago');
  t.equal(tm.format('2016-01-19 12:30:00'), '5 months ago');
  t.equal(tm.format('2016-07-21 12:30:00'), 'in 1 month');
  t.equal(tm.format('2016-08-20 12:30:00'), 'in 2 months');
  t.equal(tm.format('2016-11-20 12:30:00'), 'in 5 months');

  // test year
  t.equal(tm.format('2015-06-20 12:30:00'), '1 year ago');
  t.equal(tm.format('2014-06-20 12:30:00'), '2 years ago');
  t.equal(tm.format('2011-06-20 12:30:00'), '5 years ago');
  t.equal(tm.format('1995-06-20 12:30:00'), '21 years ago');
  t.equal(tm.format('2017-06-20 12:30:00'), 'in 1 year');
  t.equal(tm.format('2018-06-20 12:30:00'), 'in 2 years');
  t.equal(tm.format('2021-06-20 12:30:00'), 'in 5 years');
  t.equal(tm.format('2037-06-20 12:30:00'), 'in 21 years');
};