var timeago = require('../../');

module.exports = function(t) {
  var tm = timeago('2016-06-20 12:30:00', 'ca');
  tm.register('ca', require('../../locales/ca'));

  // test second
  t.equal(tm.format('2016-06-20 12:30:00'), 'fa un moment');
  t.equal(tm.format('2016-06-20 12:29:50'), 'fa 10 segons');
  t.equal(tm.format('2016-06-20 12:29:39'), 'fa 21 segons');
  t.equal(tm.format('2016-06-20 12:29:38'), 'fa 22 segons');
  t.equal(tm.format('2016-06-20 12:30:01'), 'd\'aquí un moment');
  t.equal(tm.format('2016-06-20 12:30:10'), 'd\'aquí 10 segons');
  t.equal(tm.format('2016-06-20 12:30:21'), 'd\'aquí 21 segons');
  t.equal(tm.format('2016-06-20 12:30:22'), 'd\'aquí 22 segons');

  // test minute
  t.equal(tm.format('2016-06-20 12:29:00'), 'fa 1 minut');
  t.equal(tm.format('2016-06-20 12:28:00'), 'fa 2 minuts');
  t.equal(tm.format('2016-06-20 12:25:00'), 'fa 5 minuts');
  t.equal(tm.format('2016-06-20 12:9:00'), 'fa 21 minuts');
  t.equal(tm.format('2016-06-20 12:31:00'), 'd\'aquí 1 minut');
  t.equal(tm.format('2016-06-20 12:32:00'), 'd\'aquí 2 minuts');
  t.equal(tm.format('2016-06-20 12:35:00'), 'd\'aquí 5 minuts');
  t.equal(tm.format('2016-06-20 12:51:00'), 'd\'aquí 21 minuts');

  // test hour
  t.equal(tm.format('2016-06-20 11:30:00'), 'fa 1 hora');
  t.equal(tm.format('2016-06-20 10:30:00'), 'fa 2 hores');
  t.equal(tm.format('2016-06-20 7:30:00'), 'fa 5 hores');
  t.equal(tm.format('2016-06-19 15:30:00'), 'fa 21 hores');
  t.equal(tm.format('2016-06-20 13:30:00'), 'd\'aquí 1 hora');
  t.equal(tm.format('2016-06-20 14:30:00'), 'd\'aquí 2 hores');
  t.equal(tm.format('2016-06-20 17:30:00'), 'd\'aquí 5 hores');
  t.equal(tm.format('2016-06-21 9:30:00'), 'd\'aquí 21 hores');

  // test day
  t.equal(tm.format('2016-06-19 12:30:00'), 'fa 1 dia');
  t.equal(tm.format('2016-06-18 12:30:00'), 'fa 2 dies');
  t.equal(tm.format('2016-06-15 12:30:00'), 'fa 5 dies');
  t.equal(tm.format('2016-06-21 12:30:00'), 'd\'aquí 1 dia');
  t.equal(tm.format('2016-06-22 12:30:00'), 'd\'aquí 2 dies');
  t.equal(tm.format('2016-06-25 12:30:00'), 'd\'aquí 5 dies');

  // test week
  t.equal(tm.format('2016-06-13 12:30:00'), 'fa 1 setmana');
  t.equal(tm.format('2016-06-06 12:30:00'), 'fa 2 setmanes');
  t.equal(tm.format('2016-06-27 12:30:00'), 'd\'aquí 1 setmana');
  t.equal(tm.format('2016-07-04 12:30:00'), 'd\'aquí 2 setmanes');

  // test month
  t.equal(tm.format('2016-05-20 12:30:00'), 'fa 1 mes');
  t.equal(tm.format('2016-04-20 12:30:00'), 'fa 2 mesos');
  t.equal(tm.format('2016-01-19 12:30:00'), 'fa 5 mesos');
  t.equal(tm.format('2016-07-21 12:30:00'), 'd\'aquí 1 mes');
  t.equal(tm.format('2016-08-20 12:30:00'), 'd\'aquí 2 mesos');
  t.equal(tm.format('2016-11-20 12:30:00'), 'd\'aquí 5 mesos');

  // test year
  t.equal(tm.format('2015-06-20 12:30:00'), 'fa 1 any');
  t.equal(tm.format('2014-06-20 12:30:00'), 'fa 2 anys');
  t.equal(tm.format('2011-06-20 12:30:00'), 'fa 5 anys');
  t.equal(tm.format('1995-06-20 12:30:00'), 'fa 21 anys');
  t.equal(tm.format('2017-06-20 12:30:00'), 'd\'aquí 1 any');
  t.equal(tm.format('2018-06-20 12:30:00'), 'd\'aquí 2 anys');
  t.equal(tm.format('2021-06-20 12:30:00'), 'd\'aquí 5 anys');
  t.equal(tm.format('2037-06-20 12:30:00'), 'd\'aquí 21 anys');
};

