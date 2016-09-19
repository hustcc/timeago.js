'use strict';

const timeagoLib = require('../'),
  HOURS_IN_MONTH = 24*7*(365/7/12),
  DAYS_IN_WEEK = 7;

class TimeagoBuilder {
  constructor(nowDate, defaultLocale) {
    defaultLocale = defaultLocale || 'en';

    /** @private */
    this.nowDate = new Date(nowDate);

    /** @private */
    this.timeago = new timeagoLib(nowDate);

    this.useLocale(defaultLocale);
  }

  /**
   * Falls back to `timeago().register` method. Third parameter tells to instantly use registered locale
   * @param code
   * @param fn
   * @param {boolean} use
   * @returns {TimeagoBuilder}
   */
  register(code, fn, use) {
    use = use || false;
    timeagoLib.register(code, fn);

    if (use) {
      this.timeago.setLocale(code);
    }

    return this;
  }

  /**
   * Falls back to `timeago().setLocale` method
   * @param code
   * @returns {TimeagoBuilder}
   */
  useLocale(code) {
    this.timeago.setLocale(code);

    return this;
  }

  /**
   * Falls back `timeago.format()` value
   * @param [format]
   * @returns {string}
   */
  getFormat(format) {
    return this.timeago.format(format || this.nowDate.getTime());
  }

  /**
   * Adds piece of time in OO way
   * @param {{seconds?: number, minutes?: number, hours?: number, days?: number, weeks?: number, months?: number, years?: number}} obj
   * @returns {string}
   */
  add(obj) {
    return this.setAndFormat(date => {
      if (obj.seconds > 0) this.setSeconds(date, obj.seconds);
      if (obj.minutes > 0) this.setMinutes(date, obj.minutes);
      if (obj.hours > 0) this.setHours(date, obj.hours);
      if (obj.days > 0) this.setDays(date, obj.days);
      if (obj.weeks > 0) this.setWeeks(date, obj.weeks);
      if (obj.months > 0) this.setMonths(date, obj.months);
      if (obj.years > 0) this.setYears(date, obj.years);
    });
  }

  /**
   * Subs piece of time in OO way
   * @param {{seconds?: number, minutes?: number, hours?: number, days?: number, weeks?: number, months?: number, years?: number}} obj
   * @returns {string}
   */
  sub(obj) {
    return this.setAndFormat(date => {
      if (obj.seconds > 0) this.setSeconds(date, -obj.seconds);
      if (obj.minutes > 0) this.setMinutes(date, -obj.minutes);
      if (obj.hours > 0) this.setHours(date, -obj.hours);
      if (obj.days > 0) this.setDays(date, -obj.days);
      if (obj.weeks > 0) this.setWeeks(date, -obj.weeks);
      if (obj.months > 0) this.setMonths(date, -obj.months);
      if (obj.years > 0) this.setYears(date, -obj.years);
    });
  }

  /**
   *
   * @param setFn
   * @private
   * @throws TypeError
   */
  setAndFormat(setFn) {
    if (typeof setFn !== 'function') throw new TypeError('`setFn` must be callable');

    const date = new Date(this.nowDate.getTime()),
      result = setFn(date);

    let val;

    if (result instanceof Date) {
      val = result.getTime();
    } else if (result === parseFloat(result)) {
      val = result;
    } else {
      val = date;
    }

    return this.getFormat(val);
  }

}
/**
 * Dynamically generates add/sub/set methods
 */
['Seconds', 'Minutes', 'Hours', 'Date', 'Weeks', 'Months', 'FullYear'].forEach(fnName => {
  if (fnName === 'Weeks') {
    /** @private */
    TimeagoBuilder.prototype.setWeeks = function(date, n) {
      return date.setDate(date.getDate() + n * DAYS_IN_WEEK);
    };
  } else if (fnName === 'Months') {
    /** @private */
    TimeagoBuilder.prototype.setMonths = function(date, n) {
      return date.setHours(date.getHours() + n * HOURS_IN_MONTH);
    };
  } else {
    // setSeconds, setMinutes, setHours, setDate, setFullYear
    TimeagoBuilder.prototype[`set${fnName}`] = function(date, n) {
      return date[`set${fnName}`](date[`get${fnName}`]() + n);
    };
  }

  // addSeconds, addMinutes, addHours, addDate, addWeeks, addMonths, addFullYear
  TimeagoBuilder.prototype[`add${fnName}`] = function(n) {
    return this.setAndFormat(date => this[`set${fnName}`](date, n));
  };

  // subSeconds, subMinutes, subHours, subDate, subWeeks, subMonths, subFullYear
  TimeagoBuilder.prototype[`sub${fnName}`] = function(n) {
    return this.setAndFormat(date => this[`set${fnName}`](date, -n));
  };
});

// set aliases for more suitable names
TimeagoBuilder.prototype.addDays = TimeagoBuilder.prototype.addDate;
TimeagoBuilder.prototype.subDays = TimeagoBuilder.prototype.subDate;
/** @private */
TimeagoBuilder.prototype.setDays = TimeagoBuilder.prototype.setDate;
TimeagoBuilder.prototype.addYears = TimeagoBuilder.prototype.addFullYear;
TimeagoBuilder.prototype.subYears = TimeagoBuilder.prototype.subFullYear;
/** @private */
TimeagoBuilder.prototype.setYears = TimeagoBuilder.prototype.setFullYear;

// exports factory function
exports = module.exports = (nowDate, locale) => new TimeagoBuilder(nowDate, locale);

// below are for dynamically generated methods

/**
 * @name TimeagoBuilder#addSeconds
 * @function
 * @param n
 */

/**
 * @name TimeagoBuilder#subSeconds
 * @function
 * @param n
 */

/**
 * @name TimeagoBuilder#setSeconds
 * @function
 * @private
 * @param date
 * @param n
 */

/**
 * @name TimeagoBuilder#addMinutes
 * @function
 * @param n
 */

/**
 * @name TimeagoBuilder#subMinutes
 * @function
 * @param n
 */

/**
 * @name TimeagoBuilder#setMinutes
 * @function
 * @private
 * @param date
 * @param n
 */

/**
 * @name TimeagoBuilder#addHours
 * @function
 * @param n
 */

/**
 * @name TimeagoBuilder#subHours
 * @function
 * @param n
 */

/**
 * @name TimeagoBuilder#setHours
 * @function
 * @private
 * @param date
 * @param n
 */

/**
 * @name TimeagoBuilder#addWeeks
 * @function
 * @param n
 */

/**
 * @name TimeagoBuilder#subWeeks
 * @function
 * @param n
 */

/**
 * @name TimeagoBuilder#addMonths
 * @function
 * @param n
 */

/**
 * @name TimeagoBuilder#subMonths
 * @function
 * @param n
 */
