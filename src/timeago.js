/**
 * Copyright (c) 2016 hustcc
 * License: MIT 
 * https://github.com/hustcc/pys
**/
/* jshint expr: true */
!function (root, factory) {
  if (typeof module === 'object' && module.exports)
    module.exports = factory(root);
  else
    root.timeago = factory(root);
}(typeof window !== 'undefined' ? window : this, function () {

  /**
   * timeago: the function to get `timeagp` instance.
   * - nowDate: the relative date, default is new Date().
   * - defaultLocale: the default locale, default is en. if your set it, then the `locale` parameter of format is not needed of you.
   *
   * How to use it?
   * var timeagoLib = require('timeago.js');
   * var timeago = timeagoLib(); // all use default.
   * var timeago = timeagoLib('2016-09-10'); // the relative date is 2106-09-10, so the 2016-09-11 will be 1 day ago.
   * var timeago = timeagoLib('2016-09-10', 'zh_CN'); // the relative date is 2106-09-10, and locale is zh_CN, so the 2016-09-11 will be 1天前.
  **/
  var timeago = function(nowDate, defaultLocale) {
    // if do not set the defaultLocale, set it with `en`
    if (! defaultLocale) {
      defaultLocale = 'en';
    }
    var timers = {}, // real-time render timers
    cnt = 0, // the time counter, for time key
    // second, minite, hour, day, week, month, year(365 days)
    SEC_ARRAY = [60, 60, 24, 7, 365/7/12, 12],
    SEC_ARRAY_LEN = 6,
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
    // calculate the diff second between date to be formated an now date.
    diff_sec = function(date) {
      var now = new Date();
      if (nowDate) now = toDate(nowDate);
      return (now.getTime() - toDate(date).getTime()) / 1000;
    },
    // format the diff second to *** time ago, with setting locale
    format_diff = function(diff, locale) {
      if (! locales[locale]) locale = defaultLocale;
      var localeTemp = locales[locale],
          agoin = 0, i = 0;

      if (diff < 0) agoin = 1;  // timein
      diff = Math.abs(diff);

      for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY_LEN; i++) {
        diff /= SEC_ARRAY[i];
      }
      diff = toInt(diff);
      i *= 2;

      if (diff > (i === 0 ? 9 : 1)) i += 1;
      return locales[locale](diff, i)[agoin].replace('%s', diff);
    },
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
    format = function(date, locale) {
      return format_diff(diff_sec(date), locale);
    },
    // register a language locale
    /**
     * register: register a new language locale
     * - locale: locale name, e.g. en / zh_CN, notice the standard.
     * - localeFunc: the locale process function
     *
     * How to use it?
     * var timeago = require('timeago.js')();
     *
     * // timeago.register('the locale name', the_locale_func);
     * timeago.register('pl', require('timeago.js/locales/pl'));
    **/
    register = function(locale, localeFunc) {
      locales[locale] = localeFunc;
    },
    // format Date / string / timestamp to Date instance.
    toDate = function(input) {
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
    },
    // change f into int, remove Decimal. just for code compression
    toInt = function(f) {
      return parseInt(f);
    },
    left_sec = function(diff, unit) {
      diff = diff % unit;
      diff = diff ? unit - diff : unit;
      return Math.ceil(diff);
    },
    /**
     * next_interval: calculate the next interval time.
     * - diff: the diff sec between now and date to be formated.
     *
     * What's the meaning?
     * diff = 61 then return 59 
     * diff = 3601 (an hour + 1 second), then return 3599
     * make the interval with high performace.
    **/
    next_interval = function(diff) {
      var rst = 1, i = 0, d = diff;
      for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY_LEN; i++) {
        diff /= SEC_ARRAY[i];
        rst *= SEC_ARRAY[i];
      }
      return left_sec(d, rst);
    },
    // what the timer will do
    do_render = function(node, date, locale, cnt) {
      var diff = diff_sec(date);
      node.innerHTML = format_diff(diff, locale);
      // 通过diff来判断下一次执行的时间
      timers['k' + cnt] = setTimeout(function() {
        do_render(node, date, locale, cnt);
      }, next_interval(diff) * 1000);
    },
    // 获得属性值，兼容js和jq
    attr = 'data-timeago',
    get_date_attr = function(node) {
      if (node.getAttribute) return node.getAttribute(attr);
      if(node.attr) return node.attr(attr);
    },
    /**
     * render: render the DOM real-time.
     * - nodes: which nodes will be rendered.
     * - locale: the locale name used to format date.
     *
     * How to use it?
     * var timeago = require('timeago.js')();
     * // 1. javascript selector
     * timeago.render(document.querySelectorAll('.need_to_be_rendered'));
     * // 2. use jQuery selector
     * timeago.render($('.need_to_be_rendered'), 'pl');
     *
     * Notice: please be sure the dom has attribute `data-timeago`.
    **/
    render = function(nodes, locale) {
      if (nodes.length === undefined) nodes = [nodes];
      for (var i = 0; i < nodes.length; i++) {
        cnt ++;
        do_render(nodes[i], get_date_attr(nodes[i]), locale, cnt); // 立即执行
      }
    },
    /**
     * cancel: cancel all the timers which are doing real-time render.
     *
     * How to use it?
     * var timeago = require('timeago.js')();
     * timeago.render(document.querySelectorAll('.need_to_be_rendered'));
     * timeago.cancel();
    **/
    cancel = function() {
      for (var key in timers) {
        clearTimeout(timers[key]);
      }
      timers = {};
    },
    /**
     * setLocale: set the default locale name.
     *
     * How to use it?
     * var timeago = require('timeago.js')();
     * timeago.setLocale('fr');
    **/
    setLocale = function(locale) {
      defaultLocale = locale;
    };
    // return all the APIs
    return {
      format: format,
      register: register,
      render: render,
      cancel: cancel,
      setLocale: setLocale
      // for dev test
      // next_interval: next_interval
    };
  };

  return timeago;
});