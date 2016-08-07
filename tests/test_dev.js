'use strict';

var test = require('tape');
var timeago = require('..');

test('timeago.js next interval show be tested', function (t) {
  t.equal(timeago().next_interval(8), 1);
  t.equal(timeago().next_interval(59), 1);

  t.equal(timeago().next_interval(70), 50);

  t.equal(timeago().next_interval(60 * 3 + 10), 50);
  // 10 hours
  t.equal(timeago().next_interval(3600 * 10 + 100), 3500);
  // 3 days
  t.equal(timeago().next_interval(60 * 60 * 24 * 3 + 100), 3600 * 24 -100);

  // 2weenk
  t.equal(timeago().next_interval(60 * 60 * 24 * 15 + 100),  3600 * 24 * 6 - 100);

  // 10 years
  t.equal(timeago().next_interval(3600 * 24 * 365 * 3 + 100 ), 3600 * 24 * 365 - 100);

  t.end();
});