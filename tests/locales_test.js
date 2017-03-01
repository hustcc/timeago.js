'use strict';

const fs = require('fs');
const test = require('tape');
const timeago = require('..');
const slice = require('slice.js');

// all the locales code, if missing, please add them.
const allLocales = require('../locales/locales.js');

function testLocales(tobeTested) {
  test('Testing locales', t => {
    tobeTested.forEach(file => {
      const localeName = slice(file)('0:-3');
      t.ok(allLocales.indexOf(localeName) >= 0, 'locale [' + localeName + ']');

      console.log('\nTesting locales [' + localeName + ']');

      const localeFn = require('../locales/' + localeName);
      // test locales
      let newTimeAgo = timeago('2016-06-23', null);
      timeago.register(localeName, localeFn);
      t.equal(newTimeAgo.format('2016-06-22', localeName), localeFn(1, 6)[0]);
      t.equal(newTimeAgo.format('2016-06-25', localeName), localeFn(2, 7)[1].replace('%s', '2'));

      // test default locale
      newTimeAgo = timeago('2016-03-01 12:00:00', localeName);
      timeago.register(localeName, localeFn);
      t.equal(newTimeAgo.format('2016-02-28 12:00:00'), localeFn(2, 7)[0].replace('%s', '2'));

      // test setLocale
      newTimeAgo = timeago('2016-03-01 12:00:00');
      timeago.register(localeName, localeFn);
      newTimeAgo.setLocale(localeName);
      t.equal(newTimeAgo.format('2016-02-28 12:00:00'), localeFn(2, 7)[0].replace('%s', '2'));
    });

    t.end();
  });
}

// read all the locales in `locales` dir
fs.readdir('locales', (err, files) => {
  // rm locales.js file
  const index = files.indexOf('locales.js');

  if (index > -1) {
    files.splice(index, 1);
  }
  // test them
  testLocales(files);
});