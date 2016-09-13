var timeago = require('../../');

module.exports = function(t) {
  var tm = timeago('2016-06-20 12:30:00', 'zh_CN');
    tm.register('zh_CN', require('../../locales/zh_CN'));

  // test second
  t.equal(tm.format('2016-06-20 12:30:00'), '刚刚');
  t.equal(tm.format('2016-06-20 12:29:50'), '10秒前');
  t.equal(tm.format('2016-06-20 12:29:39'), '21秒前');
  t.equal(tm.format('2016-06-20 12:29:38'), '22秒前');
  t.equal(tm.format('2016-06-20 12:30:01'), '片刻后');
  t.equal(tm.format('2016-06-20 12:30:10'), '10秒后');
  t.equal(tm.format('2016-06-20 12:30:21'), '21秒后');
  t.equal(tm.format('2016-06-20 12:30:22'), '22秒后');

  // test minute
  t.equal(tm.format('2016-06-20 12:29:00'), '1分钟前');
  t.equal(tm.format('2016-06-20 12:28:00'), '2分钟前');
  t.equal(tm.format('2016-06-20 12:25:00'), '5分钟前');
  t.equal(tm.format('2016-06-20 12:9:00'), '21分钟前');
  t.equal(tm.format('2016-06-20 12:31:00'), '1分钟后');
  t.equal(tm.format('2016-06-20 12:32:00'), '2分钟后');
  t.equal(tm.format('2016-06-20 12:35:00'), '5分钟后');
  t.equal(tm.format('2016-06-20 12:51:00'), '21分钟后');
  //
  // // test hour
  t.equal(tm.format('2016-06-20 11:30:00'), '1小时前');
  t.equal(tm.format('2016-06-20 10:30:00'), '2小时前');
  t.equal(tm.format('2016-06-20 7:30:00'), '5小时前');
  t.equal(tm.format('2016-06-19 15:30:00'), '21小时前');
  t.equal(tm.format('2016-06-20 13:30:00'), '1小时后');
  t.equal(tm.format('2016-06-20 14:30:00'), '2小时后');
  t.equal(tm.format('2016-06-20 17:30:00'), '5小时后');
  t.equal(tm.format('2016-06-21 9:30:00'), '21小时后');

  // test day
  t.equal(tm.format('2016-06-19 12:30:00'), '1天前');
  t.equal(tm.format('2016-06-18 12:30:00'), '2天前');
  t.equal(tm.format('2016-06-15 12:30:00'), '5天前');
  t.equal(tm.format('2016-06-21 12:30:00'), '1天后');
  t.equal(tm.format('2016-06-22 12:30:00'), '2天后');
  t.equal(tm.format('2016-06-25 12:30:00'), '5天后');

  // test week
  t.equal(tm.format('2016-06-13 12:30:00'), '1周前');
  t.equal(tm.format('2016-06-06 12:30:00'), '2周前');
  t.equal(tm.format('2016-06-27 12:30:00'), '1周后');
  t.equal(tm.format('2016-07-04 12:30:00'), '2周后');

  // test month
  t.equal(tm.format('2016-05-20 12:30:00'), '1月前');
  t.equal(tm.format('2016-04-20 12:30:00'), '2月前');
  t.equal(tm.format('2016-01-19 12:30:00'), '5月前');
  t.equal(tm.format('2016-07-21 12:30:00'), '1月后');
  t.equal(tm.format('2016-08-20 12:30:00'), '2月后');
  t.equal(tm.format('2016-11-20 12:30:00'), '5月后');

  // test year
  t.equal(tm.format('2015-06-20 12:30:00'), '1年前');
  t.equal(tm.format('2014-06-20 12:30:00'), '2年前');
  t.equal(tm.format('2011-06-20 12:30:00'), '5年前');
  t.equal(tm.format('1995-06-20 12:30:00'), '21年前');
  t.equal(tm.format('2017-06-20 12:30:00'), '1年后');
  t.equal(tm.format('2018-06-20 12:30:00'), '2年后');
  t.equal(tm.format('2021-06-20 12:30:00'), '5年后');
  t.equal(tm.format('2037-06-20 12:30:00'), '21年后');
};