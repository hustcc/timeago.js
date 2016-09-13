'use strict';

var test = require('tape');
var timeago = require('..');

test('timeago.js show be tested', function (t) {

  // test locale, can set the locale
  t.equal(timeago('2016-06-23').format('2016-06-22'), '1 day ago');
  t.equal(timeago('2016-06-23').format('2016-06-25'), 'in 2 days');
  t.equal(timeago('2016-06-23').format('2016-06-22', 'zh_CN'), '1天前');
  t.equal(timeago('2016-06-23').format('2016-06-25', 'zh_CN'), '2天后');

  // test register locale
  var timeago_reg = timeago('2016-06-23');
  timeago_reg.register('test_local', function(number, index) {
    return [
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
    ][index];
  });
  t.equal(timeago_reg.format('2016-06-22', 'test_local'), '1 day xxx');

  // locale tests #################################################################

  // 1. Test EN locale
  // test second
  t.equal(timeago('2016-06-23 12:12:12').format('2016-06-23 12:12:09'), 'just now');
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

  // end en locale test ---------------------------------------------------------


  // 2. Test BE locale
  var be = timeago('2016-06-23 12:12:12');
  be.register('be', require('../locales/be'));

  t.equal(be.format('2016-06-23 12:12:09', 'be'), 'толькі што');
  t.equal(be.format('2016-06-23 12:12:01', 'be'), '11 секунд таму');

  // test minute
  t.equal(be.format('2016-06-23 12:11:01', 'be'), 'хвіліну таму');
  t.equal(be.format('2016-06-23 12:09:01', 'be'), '3 хвіліны таму');

  // test hour
  t.equal(be.format('2016-06-23 11:10:01', 'be'), 'гадзіну таму');
  t.equal(be.format('2016-06-23 14:13:01', 'be'), 'праз 2 гадзіны');

  // test day
  t.equal(be.format('2016-06-22 12:10:01', 'be'), 'дзень таму');
  t.equal(be.format('2016-06-21 12:09:01', 'be'), '2 дні таму');

  // test week
  t.equal(be.format('2016-06-16 12:10:01', 'be'), 'тыдзень таму');
  t.equal(be.format('2016-06-01 12:09:01', 'be'), '3 тыдні таму');

  // test month
  t.equal(be.format('2016-05-23 12:10:01', 'be'), 'месяц таму');
  t.equal(be.format('2016-08-24 12:09:01', 'be'), 'праз 2 месяцы');

  // test year
  t.equal(be.format('2017-07-23 12:10:01', 'be'), 'праз год');
  t.equal(be.format('2012-06-23 12:09:01', 'be'), '4 гады таму');

  // end be locale test ---------------------------------------------------------

  // 3. Test zh_CN locale
  // test second
  t.equal(timeago('2016-06-23 12:12:12', 'zh_CN').format('2016-06-23 12:12:09'), '刚刚');
  t.equal(timeago('2016-06-23 12:12:12', 'zh_CN').format('2016-06-23 12:12:01'), '11秒前');
  t.equal(timeago('2016-06-23 12:12:01', 'zh_CN').format('2016-06-23 12:12:12'), '11秒后');

  // test minute
  t.equal(timeago('2016-06-23 12:11:12', 'zh_CN').format('2016-06-23 12:10:01'), '1分钟前');
  t.equal(timeago('2016-06-23 12:12:12', 'zh_CN').format('2016-06-23 12:09:01'), '3分钟前');

  // test hour
  t.equal(timeago('2016-06-23 13:12:12', 'zh_CN').format('2016-06-23 12:10:01'), '1小时前');
  t.equal(timeago('2016-06-23 15:08:12', 'zh_CN').format('2016-06-23 12:09:01'), '2小时前');

  // test day
  t.equal(timeago('2016-06-24 13:12:12', 'zh_CN').format('2016-06-23 12:10:01'), '1天前');
  t.equal(timeago('2016-06-25 15:08:12', 'zh_CN').format('2016-06-23 12:09:01'), '2天前');

  // test week
  t.equal(timeago('2016-06-30 13:12:12', 'zh_CN').format('2016-06-23 12:10:01'), '1周前');
  t.equal(timeago('2016-07-18 15:08:12', 'zh_CN').format('2016-06-23 12:09:01'), '3周前');

  // test month
  t.equal(timeago('2016-07-25 13:12:12', 'zh_CN').format('2016-06-23 12:10:01'), '1月前');
  t.equal(timeago('2016-08-23 15:08:12', 'zh_CN').format('2016-06-23 12:09:01'), '2月前');

  // test year
  t.equal(timeago('2017-06-23 13:12:12', 'zh_CN').format('2016-06-23 12:10:01'), '1年前');
  t.equal(timeago('2020-06-23 15:08:12', 'zh_CN').format('2016-06-23 12:09:01'), '4年前');

  // end zh_CN locale test ---------------------------------------------------------

  // end locale tests #################################################################

  // testcase for other points
  // relative now
  t.equal(timeago().format(new Date().getTime() - 11 * 1000 * 60 * 60), '11 hours ago');

  // timestamp is also can work
  var current = new Date().getTime();
  t.equal(timeago(current).format(current - 8 * 1000 * 60 * 60 * 24), '1 week ago');
  t.equal(timeago(current).format(current - 31536000 * 1000 + 1000), '11 months ago');

  // Date()
  var current = new Date();
  t.equal(timeago(current).format(current), 'just now');


  // test leap year
  t.equal(timeago('2016-03-01 12:00:00').format('2016-02-28 12:00:00'), '2 days ago');
  t.equal(timeago('2015-03-01 12:00:00').format('2015-02-28 12:00:00'), '1 day ago');

  // test default locale
  t.equal(timeago('2016-03-01 12:00:00').format('2016-02-28 12:00:00'), '2 days ago');
  t.equal(timeago('2016-03-01 12:00:00', 'zh_CN').format('2016-02-28 12:00:00'), '2天前');

  // test setLocale
  var newTimeAgo = timeago('2016-03-01 12:00:00');
  t.equal(newTimeAgo.format('2016-02-28 12:00:00'), '2 days ago');
  newTimeAgo.setLocale('zh_CN');
  t.equal(newTimeAgo.format('2016-02-28 12:00:00'), '2天前');
  t.end();
});
