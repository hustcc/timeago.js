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
  timeago_reg.register('test_local', [
    ["just xxx", "a while"],
    ["%s seconds xxx", "in %s seconds"],
    ["1 minute xxx", "in 1 minute"],
    ["%s minutes xxx", "in %s minutes"],
    ["1 hour xxx", "in 1 hour"],
    ["%s hours xxx", "in %s hours"],
    ["1 day xxx", "in 1 day"],
    ["%s days xxx", "in %s days"],
    ['一周前', '一周后'], 
    ['%s周前', '%s周后'], 
    ["1 month xxx", "in 1 month"],
    ["%s months xxx", "in %s months"],
    ["1 year xxx", "in 1 year"],
    ["%s years xxx", "in %s years"]
  ]);
  t.equal(timeago_reg.format('2016-06-22', 'test_local'), '1 day xxx');

  // test second
  t.equal(timeago('2016-06-23 12:12:12').format('2016-06-23 12:12:09'), 'just now');
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

  // test week
  t.equal(timeago('2016-06-30 13:12:12').format('2016-06-23 12:10:01'), '1 week ago');
  t.equal(timeago('2016-07-18 15:08:12').format('2016-06-23 12:09:01'), '3 weeks ago');

  // test month
  t.equal(timeago('2016-07-25 13:12:12').format('2016-06-23 12:10:01'), '1 month ago');
  t.equal(timeago('2016-08-23 15:08:12').format('2016-06-23 12:09:01'), '2 months ago');

  // test year
  t.equal(timeago('2017-06-23 13:12:12').format('2016-06-23 12:10:01'), '1 year ago');
  t.equal(timeago('2020-06-23 15:08:12').format('2016-06-23 12:09:01'), '4 years ago');

  // relative now
  t.equal(timeago().format(new Date().getTime() - 11 * 1000 * 60 * 60), '11 hours ago');

  // timestamp is also can work
  var current = new Date().getTime();
  t.equal(timeago(current).format(current - 8 * 1000 * 60 * 60 * 24), '1 week ago');
  t.equal(timeago(current).format(current - 31536000 * 1000 + 1000), '11 months ago');

  // test leap year
  t.equal(timeago('2016-03-01 12:00:00').format('2016-02-28 12:00:00'), '2 days ago');
  t.equal(timeago('2015-03-01 12:00:00').format('2015-02-28 12:00:00'), '1 day ago');
  t.end();
});