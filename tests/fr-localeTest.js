'use strict';

var test = require('tape');
var timeago = require('..');

test('Testing locale fr', function (t) {

  t.equal(timeago('2016-06-23').format('2016-06-22', 'fr'), 'il y a 1 jour');
  t.equal(timeago('2016-06-23').format('2016-06-25', 'fr'), 'il y a 2 jours');

  // test default locale
  t.equal(timeago('2016-03-01 12:00:00', 'fr').format('2016-02-28 12:00:00'), 'il y a 2 jours');

  // test setLocale
  var newTimeAgo = timeago('2016-03-01 12:00:00');
  newTimeAgo.setLocale('fr');
  t.equal(newTimeAgo.format('2016-02-28 12:00:00'), 'il y a 2 jours');

  t.end();
});
