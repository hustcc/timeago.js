'use strict';

var fs = require('fs');
var test = require('tape');
var timeago = require('..');
var psy = require('pys');

// all the locales code, if missing, please add them.
var all_locales = require('../locales/locales.js'); 

function test_locales(tobeTested) {
  test('Testing locales', function (t) {
    for (var i = 0; i < tobeTested.length ; i++) {
      var locale_name = psy(tobeTested[i])('0:-3');
      t.ok(all_locales.indexOf(locale_name) >= 0, 'locale [' + locale_name + ']');

      console.log('\nTesting locales [' + locale_name + ']');

      var locale = require('../locales/' + locale_name);
      // test locales
      var newTimeAgo = timeago('2016-06-23');
      newTimeAgo.register(locale_name, locale);
      t.equal(newTimeAgo.format('2016-06-22', locale_name), locale(1, 6)[0]);
      t.equal(newTimeAgo.format('2016-06-25', locale_name), locale(2, 7)[1].replace('%s', '2'));

      // test default locale
      var newTimeAgo = timeago('2016-03-01 12:00:00', locale_name);
      newTimeAgo.register(locale_name, locale);
      t.equal(newTimeAgo.format('2016-02-28 12:00:00'), locale(2, 7)[0].replace('%s', '2'));

      // test setLocale
      var newTimeAgo = timeago('2016-03-01 12:00:00');
      newTimeAgo.register(locale_name, locale);
      newTimeAgo.setLocale(locale_name);
      t.equal(newTimeAgo.format('2016-02-28 12:00:00'), locale(2, 7)[0].replace('%s', '2'));
    }
    t.end();
  });
}

// read all the locales in `locales` dir
fs.readdir('locales', function(err, files) {
  // rm locales.js file
  var index = files.indexOf('locales.js');
  if (index > -1) {
    files.splice(index, 1);
  }
  // test them
  test_locales(files);
});