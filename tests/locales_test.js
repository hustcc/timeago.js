'use strict';

var fs = require('fs');
var test = require('tape');
var timeago = require('..');

var tobeTested = ['en', 'zh_CN', 'fr', 'nl_BE', 'pt_BR']; // when add a new locale, add locale's name here

test('Testing locales', function (t) {
  for (var i = 0; i < tobeTested.length ; i++) {
    var locale_name = tobeTested[i];
  
    console.log('\nTesting locales [' + locale_name + ']');

    var locale = eval(fs.readFileSync('locales/' + locale_name + '.js', 'utf-8').replace('var locale = ', ''));
    // test locales
    var newTimeAgo = timeago('2016-06-23');
    newTimeAgo.register(locale_name, locale);
    t.equal(newTimeAgo.format('2016-06-22', locale_name), locale[6][0]);
    t.equal(newTimeAgo.format('2016-06-25', locale_name), locale[7][1].replace('%s', '2'));

    // test default locale
    var newTimeAgo = timeago('2016-03-01 12:00:00', locale_name);
    newTimeAgo.register(locale_name, locale);
    t.equal(newTimeAgo.format('2016-02-28 12:00:00'), locale[7][0].replace('%s', '2'));

    // test setLocale
    var newTimeAgo = timeago('2016-03-01 12:00:00');
    newTimeAgo.register(locale_name, locale);
    newTimeAgo.setLocale(locale_name);
    t.equal(newTimeAgo.format('2016-02-28 12:00:00'), locale[7][0].replace('%s', '2'));
  };

  t.end();
});
  
  
