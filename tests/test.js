'use strict';

const test = require('tape');
const timeago = require('..');
const fs = require('fs');
const slice = require('slice.js');
const testBuilder = require('./test-builder');

test('timeago.js should be tested', t => {
  // locale tests #################################################################
  // read all the locales test in `tests/locales` dir
  fs.readdir('tests/locales', (err, files) => {
    files.forEach(file => {
      const locale = slice(file)('0:-3');
      console.log('\nLocale testcase for ['+ locale +']');
      // require in the locales testcases
      const tb = testBuilder(Date.now()).register(locale, require('../locales/' + locale), true);
      require('./locales/' + locale)(t, tb);
    })
  });
  // end locale tests #############################################################

  // test locale, can set the locale
  t.equal(timeago('2016-06-23').format('2016-06-22'), '1 day ago');
  t.equal(timeago('2016-06-23').format('2016-06-25'), 'in 2 days');
  t.equal(timeago('2016-06-23').format('2016-06-22', 'zh_CN'), '1天前');
  t.equal(timeago('2016-06-23').format('2016-06-25', 'zh_CN'), '2天后');

  // test register locale
  const timeagoReg = timeago('2016-06-23');
  timeago.register('test_local', (number, index) => [
      ["just xxx", "right now"],
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
    ][index]
  );
  t.equal(timeagoReg.format('2016-06-22', 'test_local'), '1 day xxx');

  // testcase for other points
  // relative now
  t.equal(timeago().format(Date.now() - 11 * 1000 * 60 * 60), '11 hours ago');

  // timestamp is also can work
  let current = Date.now();
  t.equal(timeago(current, null).format(current - 8 * 1000 * 60 * 60 * 24), '1 week ago');
  t.equal(timeago(current, null).format(current - 31536000 * 1000 + 1000), '11 months ago');

  // Date()
  current = new Date();
  t.equal(timeago(current, null).format(current), 'just now');


  // test leap year
  t.equal(timeago('2016-03-01 12:00:00').format('2016-02-28 12:00:00'), '2 days ago');
  t.equal(timeago('2015-03-01 12:00:00').format('2015-02-28 12:00:00'), '1 day ago');

  // test default locale
  t.equal(timeago('2016-03-01 12:00:00').format('2016-02-28 12:00:00'), '2 days ago');
  t.equal(timeago('2016-03-01 12:00:00', 'zh_CN').format('2016-02-28 12:00:00'), '2天前');

  // test setLocale
  const newTimeAgo = timeago('2016-03-01 12:00:00');
  t.equal(newTimeAgo.format('2016-02-28 12:00:00'), '2 days ago');
  newTimeAgo.setLocale('zh_CN');
  t.equal(newTimeAgo.format('2016-02-28 12:00:00'), '2天前');

  const newTimeAgoDefaultLocale = timeago('2016-03-01 12:00:00', 'pl');
  t.equal(newTimeAgoDefaultLocale.format('2016-02-28 12:00:00'), '2 days ago');
  t.equal(newTimeAgoDefaultLocale.format('2016-02-28 12:00:00', 'hahah'), '2 days ago');
  t.equal(newTimeAgoDefaultLocale.format('2016-02-28 12:00:00', 'zh_CN'), '2天前');
  t.end();
});
