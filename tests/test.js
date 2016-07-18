'use strict';

var test = require('tape');
var timeago = require('..');

test('timeago.js show be tested', function (t) {

  // test local, can set the local
  t.equal(timeago('2016-06-23').format('2016-06-22'), '1 day ago');
  t.equal(timeago('2016-06-23').format('2016-06-25'), 'in 2 days');
  t.equal(timeago('2016-06-23').format('2016-06-22', 'zh_CN'), '1天前');
  t.equal(timeago('2016-06-23').format('2016-06-25', 'zh_CN'), '2天后');

  // test register local
  var timeago_reg = timeago('2016-06-23');
  timeago_reg.register('test_local', {
    'JUST_NOW': ["just xxx", "a while"],
    'SECOND_AGO': ["%s seconds xxx", "in %s seconds"],
    'A_MINUTE_AGO': ["1 minute xxx", "in 1 minute"],
    'MINUTES_AGO': ["%s minutes xxx", "in %s minutes"],
    'AN_HOUR_AGO': ["1 hour xxx", "in 1 hour"],
    'HOURS_AGO': ["%s hours xxx", "in %s hours"],
    'A_DAY_AGO': ["1 day xxx", "in 1 day"],
    'DAYS_AGO': ["%s days xxx", "in %s days"],
    'A_MONTH_AGO': ["1 month xxx", "in 1 month"],
    'MONTHS_AGO': ["%s months xxx", "in %s months"],
    'A_YEAR_AGO': ["1 year xxx", "in 1 year"],
    'YEARS_AGO': ["%s years xxx", "in %s years"]
  });
  t.equal(timeago_reg.format('2016-06-22', 'test_local'), '1 day xxx');
  // test second
  t.equal(timeago('2016-06-23 12:12:12').format('2016-06-23 12:12:01'), '11 seconds ago');
  
  // test minute
  t.equal(timeago('2016-06-23 12:11:12').format('2016-06-23 12:10:01'), '1 minute ago');
  t.equal(timeago('2016-06-23 12:12:12').format('2016-06-23 12:09:01'), '3 minutes ago');

  // test hour
  t.equal(timeago('2016-06-23 13:12:12').format('2016-06-23 12:10:01'), '1 hour ago');
  t.equal(timeago('2016-06-23 15:08:12').format('2016-06-23 12:09:01'), '2 hours ago');

  // test day
  t.equal(timeago('2016-06-24 13:12:12').format('2016-06-23 12:10:01'), '1 day ago');
  t.equal(timeago('2016-06-25 15:08:12').format('2016-06-23 12:09:01'), '2 days ago');

  // test month
  t.equal(timeago('2016-07-23 13:12:12').format('2016-06-23 12:10:01'), '1 month ago');
  t.equal(timeago('2016-08-23 15:08:12').format('2016-06-23 12:09:01'), '2 months ago');

  // test year
  t.equal(timeago('2017-06-23 13:12:12').format('2016-06-23 12:10:01'), '1 year ago');
  t.equal(timeago('2020-06-23 15:08:12').format('2016-06-23 12:09:01'), '4 years ago');

  // relative now
  t.equal(timeago().format(new Date().getTime() - 11 * 1000 * 60 * 60), '11 hours ago');

  // timestamp is also can work
  var current = new Date().getTime();
  t.equal(timeago(current).format(current - 8 * 1000 * 60 * 60 * 24), '8 days ago');

  // test leap year
  t.equal(timeago('2016-03-01 12:00:00').format('2016-02-28 12:00:00'), '2 days ago');
  t.equal(timeago('2015-03-01 12:00:00').format('2015-02-28 12:00:00'), '1 day ago');
  t.end();
});