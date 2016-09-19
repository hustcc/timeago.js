/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * https://github.com/hustcc/timeago.js
 **/
/* jshint expr: true */
!function (root, factory) {
  if (typeof module === 'object' && module.exports)
    module.exports = factory(root);
  else
    root.timeago = factory(root);
}(typeof window !== 'undefined' ? window : this, function () {

  var cnt = 0, // the timer counter, for timer key
    indexMapEn = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'],
    indexMapZh = ['秒', '分钟', '小时', '天', '周', '月', '年'],
    // build-in locales: en & zh_CN
    locales = {
      'en': function(number, index) {
        if (index === 0) return ['just now', 'a while'];
        else {
          var unit = indexMapEn[parseInt(index / 2)];
          if (number > 1) unit += 's';
          return [number + ' ' + unit + ' ago', 'in ' + number + ' ' + unit];
        }
      },
      'zh_CN': function(number, index) {
        if (index === 0) return ['刚刚', '片刻后'];
        else {
          var unit = indexMapZh[parseInt(index / 2)];
          return [number + unit + '前', number + unit + '后'];
        }
      }
    },
    // second, minute, hour, day, week, month, year(365 days)
    SEC_ARRAY = [60, 60, 24, 7, 365/7/12, 12],
    SEC_ARRAY_LEN = 6,
    attrDatetime = 'datetime';

  // format the diff second to *** time ago, with setting locale
  function formatDiff(diff, locale) {
    var agoin = 0, i = 0;

    if (diff < 0) agoin = 1;  // timein
    diff = Math.abs(diff);

    for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY_LEN; i++) {
      diff /= SEC_ARRAY[i];
    }
    diff = toInt(diff);
    i *= 2;

    if (diff > (i === 0 ? 9 : 1)) i += 1;

    return locales[locale](diff, i)[agoin].replace('%s', diff);
  }
  // format Date / string / timestamp to Date instance.
  function toDate(input) {
    if (input instanceof Date) {
      return input;
    } else if (!isNaN(input)) {
      return new Date(toInt(input));
    } else if (/^\d+$/.test(input)) {
      return new Date(toInt(input, 10));
    } else {
      var s = (input || '').trim();
      s = s.replace(/\.\d+/, '') // remove milliseconds
        .replace(/-/, '/').replace(/-/, '/')
        .replace(/T/, ' ').replace(/Z/, ' UTC')
        .replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2'); // -04:00 -> -0400
      return new Date(s);
    }
  }
  // change f into int, remove Decimal. just for code compression
  function toInt(f) {
    return parseInt(f);
  }
  function leftSec(diff, unit) {
    diff = diff % unit;
    diff = diff ? unit - diff : unit;
    return Math.ceil(diff);
  }
  // calculate the diff second between provided dates
  function diffSec(now, date) {
    return (toDate(now) - toDate(date).getTime()) / 1000;
  }
  /**
   * nextInterval: calculate the next interval time.
   * - diff: the diff sec between now and date to be formatted.
   *
   * What's the meaning?
   * diff = 61 then return 59
   * diff = 3601 (an hour + 1 second), then return 3599
   * make the interval with high performace.
   **/
  // this.nextInterval = function(diff) { // for dev test
  function nextInterval(diff) {
    var rst = 1, i = 0, d = diff;
    for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY_LEN; i++) {
      diff /= SEC_ARRAY[i];
      rst *= SEC_ARRAY[i];
    }
    return leftSec(d, rst);
  }
  // get the datetime attribute, jQuery and DOM
  function getDateAttr(node) {
    if (node.getAttribute) return node.getAttribute(attrDatetime);
    if(node.attr) return node.attr(attrDatetime);
  }
  /**
   * timeago: the function to get `timeago` instance.
   * - nowDate: the relative date, default is new Date().
   * - defaultLocale: the default locale, default is en. if your set it, then the `locale` parameter of format is not needed of you.
   *
   * How to use it?
   * var timeagoLib = require('timeago.js');
   * var timeago = timeagoLib(); // all use default.
   * var timeago = timeagoLib('zh_CN'); // set default locale is `zh_CN`.
   * var timeago = timeagoLib(null, '2016-09-10'); // the relative date is 2016-09-10, so the 2016-09-11 will be 1 day ago.
   * var timeago = timeagoLib('zh_CN', '2016-09-10'); // the relative date is 2016-09-10, and locale is zh_CN, so the 2016-09-11 will be 1天前.
   *
   * @param defaultLocale
   * @param nowDate
   * @constructor
   */
  function Timeago(defaultLocale, nowDate) {
    /** @private */
    this.timers = Object.create(null); // real-time render timers

    /**
     * if do not set the defaultLocale, set it with default `en`
     * @private
     */
    this.defaultLocale = defaultLocale || 'en';

    /** @private */
    this.nowDate = nowDate;
  }
  /**
   * cancel: cancel all the timers which are doing real-time render.
   *
   * How to use it?
   * var timeago = new require('timeago.js')();
   * timeago.render(document.querySelectorAll('.need_to_be_rendered'));
   * timeago.cancel(); // will stop all the timer, stop render in real time.
   **/
  Timeago.prototype.cancel = function() {
    for (var key in this.timers) {
      clearTimeout(this.timers[key]);
    }
    this.timers = {};
  };
  /**
   * render: render the DOM real-time.
   * - nodes: which nodes will be rendered.
   * - locale: the locale name used to format date.
   *
   * How to use it?
   * var timeago = new require('timeago.js')();
   * // 1. javascript selector
   * timeago.render(document.querySelectorAll('.need_to_be_rendered'));
   * // 2. use jQuery selector
   * timeago.render($('.need_to_be_rendered'), 'pl');
   *
   * Notice: please be sure the dom has attribute `data-timeago`.
   **/
  Timeago.prototype.render = function(nodes, locale) {
    if (nodes.length === undefined) nodes = [nodes];
    for (var i = 0; i < nodes.length; i++) {
      this.doRender(nodes[i], getDateAttr(nodes[i]), locale, ++ cnt); // render item
    }
  };
    /**
   * format: format the date to *** time ago, with setting or default locale
   * - date: the date / string / timestamp to be formated
   * - locale: the formated string's locale name, e.g. en / zh_CN
   *
   * How to use it?
   * var timeago = require('timeago.js')();
   * timeago.format(new Date(), 'pl'); // Date instance
   * timeago.format('2016-09-10', 'fr'); // formated date string
   * timeago.format(1473473400269); // timestamp with ms
   **/
  Timeago.prototype.format = function(date, locale) {
    return formatDiff(diffSec(this.getNowDate(), date), this.validateAndGetLocale(locale));
  };
  /**
   * setLocale: sets the default locale name.
   *
   * How to use it?
   * var timeago = require('timeago.js');
   * timeago = new timeago();
   * timeago.setLocale('fr');
   **/
  Timeago.prototype.setLocale = function(locale) {
    this.defaultLocale = locale;
  };
  /**
   * what the timer will do
   *
   * @param node
   * @param date
   * @param locale
   * @param cnt
   *
   * @private
   */
  Timeago.prototype.doRender = function(node, date, locale, cnt) {
    var diff = diffSec(this.getNowDate(), date),
      self = this;

    node.innerHTML = formatDiff(diff, this.validateAndGetLocale(locale));
    // 通过diff来判断下一次执行的时间
    this.timers['k' + cnt] = setTimeout(function() {
      self.doRender(node, date, locale, cnt);
    }, nextInterval(diff) * 1000);
  };
  /**
   * returns now date if it was set, otherwise - current date
   *
   * @private
   * @returns {Date}
   */
  Timeago.prototype.getNowDate = function() {
    return this.nowDate ? toDate(this.nowDate) : new Date();
  };
  /**
   * @param locale
   *
   * @private
   * @returns {string}
   */
  Timeago.prototype.validateAndGetLocale = function(locale) {
    return !locales[locale] ? this.defaultLocale : locale;
  };

  /**
   * Returns an instance of timeago
   * @param defaultLocale
   * @param nowDate
   * @returns {Timeago}
   */
  function timeagoFactory(defaultLocale, nowDate) {
    return new Timeago(defaultLocale, nowDate);
  }

  /**
   * register: register a new language locale
   * - locale: locale name, e.g. en / zh_CN, notice the standard.
   * - localeFunc: the locale process function
   *
   * How to use it?
   * var timeagoLib = require('timeago.js');
   *
   * timeagoLib.register('the locale name', the_locale_func);
   * // or
   * timeagoLib.register('pl', require('timeago.js/locales/pl'));
   **/
  timeagoFactory.register = function(locale, localeFunc) {
    locales[locale] = localeFunc;
  };

  return timeagoFactory;
});