var timeago = require('../../');

module.exports = function(t) {
  var tm = timeago('2016-06-20 12:30:00', 'ja');
  tm.register('ja', require('../../locales/ja'));

  // test second
  t.equal(tm.format('2016-06-20 12:30:00'), 'すこし前');
  t.equal(tm.format('2016-06-20 12:29:50'), '10秒前');
  t.equal(tm.format('2016-06-20 12:29:39'), '21秒前');
  t.equal(tm.format('2016-06-20 12:29:38'), '22秒前');
  t.equal(tm.format('2016-06-20 12:30:01'), 'すぐに');
  t.equal(tm.format('2016-06-20 12:30:10'), '10秒以内');
  t.equal(tm.format('2016-06-20 12:30:21'), '21秒以内');
  t.equal(tm.format('2016-06-20 12:30:22'), '22秒以内');

  // test minute
  t.equal(tm.format('2016-06-20 12:29:00'), '1分前');
  t.equal(tm.format('2016-06-20 12:28:00'), '2分前');
  t.equal(tm.format('2016-06-20 12:25:00'), '5分前');
  t.equal(tm.format('2016-06-20 12:9:00'), '21分前');
  t.equal(tm.format('2016-06-20 12:31:00'), '1分以内');
  t.equal(tm.format('2016-06-20 12:32:00'), '2分以内');
  t.equal(tm.format('2016-06-20 12:35:00'), '5分以内');
  t.equal(tm.format('2016-06-20 12:51:00'), '21分以内');

  // test hour
  t.equal(tm.format('2016-06-20 11:30:00'), '1時間前');
  t.equal(tm.format('2016-06-20 10:30:00'), '2時間前');
  t.equal(tm.format('2016-06-20 7:30:00'), '5時間前');
  t.equal(tm.format('2016-06-19 15:30:00'), '21時間前');
  t.equal(tm.format('2016-06-20 13:30:00'), '1時間以内');
  t.equal(tm.format('2016-06-20 14:30:00'), '2時間以内');
  t.equal(tm.format('2016-06-20 17:30:00'), '5時間以内');
  t.equal(tm.format('2016-06-21 9:30:00'), '21時間以内');

  // test day
  t.equal(tm.format('2016-06-19 12:30:00'), '1日前');
  t.equal(tm.format('2016-06-18 12:30:00'), '2日前');
  t.equal(tm.format('2016-06-15 12:30:00'), '5日前');
  t.equal(tm.format('2016-06-21 12:30:00'), '1日以内');
  t.equal(tm.format('2016-06-22 12:30:00'), '2日以内');
  t.equal(tm.format('2016-06-25 12:30:00'), '5日以内');

  // test week
  t.equal(tm.format('2016-06-13 12:30:00'), '1週間前');
  t.equal(tm.format('2016-06-06 12:30:00'), '2週間前');
  t.equal(tm.format('2016-06-27 12:30:00'), '1週間以内');
  t.equal(tm.format('2016-07-04 12:30:00'), '2週間以内');

  // test month
  t.equal(tm.format('2016-05-20 12:30:00'), '1ヶ月前');
  t.equal(tm.format('2016-04-20 12:30:00'), '2ヶ月前');
  t.equal(tm.format('2016-01-19 12:30:00'), '5ヶ月前');
  t.equal(tm.format('2016-07-21 12:30:00'), '1ヶ月以内');
  t.equal(tm.format('2016-08-20 12:30:00'), '2ヶ月以内');
  t.equal(tm.format('2016-11-20 12:30:00'), '5ヶ月以内');

  // test year
  t.equal(tm.format('2015-06-20 12:30:00'), '1年前');
  t.equal(tm.format('2014-06-20 12:30:00'), '2年前');
  t.equal(tm.format('2011-06-20 12:30:00'), '5年前');
  t.equal(tm.format('1995-06-20 12:30:00'), '21年前');
  t.equal(tm.format('2017-06-20 12:30:00'), '1年以内');
  t.equal(tm.format('2018-06-20 12:30:00'), '2年以内');
  t.equal(tm.format('2021-06-20 12:30:00'), '5年以内');
  t.equal(tm.format('2037-06-20 12:30:00'), '21年以内');
};