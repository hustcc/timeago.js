'use strict';

const test = require('tape');
const timeago = require('..');

test('timeago.js next interval show be tested', t => {
  t.true(timeago().next_interval(0.134), 1);
  t.true(timeago().next_interval(8), 1);
  t.true(timeago().next_interval(59), 1);

  t.true(timeago().next_interval(70), 50);

  t.true(timeago().next_interval(60 * 3 + 10), 50);
  // 10 hours
  t.true(timeago().next_interval(3600 * 10 + 100), 3500);
  // 3 days
  t.true(timeago().next_interval(60 * 60 * 24 * 3 + 100), 3600 * 24 -100);

  // 2 weeks
  t.true(timeago().next_interval(60 * 60 * 24 * 15 + 100),  3600 * 24 * 6 - 100);

  // 10 years
  t.true(timeago().next_interval(3600 * 24 * 365 * 3 + 100 ), 3600 * 24 * 365 - 100);

  t.end();
});