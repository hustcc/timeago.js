'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

var IndexMapEn = exports.IndexMapEn = 'second_minute_hour_day_week_month_year'.split('_');

var IndexMapZH = exports.IndexMapZH = '秒_分钟_小时_天_周_月_年'.split('_');

var ATTR_DATA_TID = exports.ATTR_DATA_TID = 'data-tid';

var SEC_ARRAY = exports.SEC_ARRAY = [60, 60, 24, 7, 365 / 7 / 12, 12];

var ATTR_TIMEAGO = exports.ATTR_TIMEAGO = 'data-timeago';
var ATTR_DATETIME = exports.ATTR_DATETIME = 'datetime';