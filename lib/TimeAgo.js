'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeAgo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by hustcc on 18/5/20.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Contract: i@hust.cc
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _helper = require('./helper');

var _timer = require('./timer');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeAgo = exports.TimeAgo = function () {
  function TimeAgo(nowDate) {
    var defaultLocale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

    _classCallCheck(this, TimeAgo);

    this.nowDate = nowDate;
    this.defaultLocale = defaultLocale;
  }

  _createClass(TimeAgo, [{
    key: 'setLocale',
    value: function setLocale(locale) {
      this.defaultLocale = locale;
    }

    /**
     * render 定期器渲染
     * @param node
     * @param date
     * @param locale
     */

  }, {
    key: 'doRender',
    value: function doRender(node, date, locale) {
      var _this = this;

      // delete previously assigned timeout's id to node
      node.innerHTML = this.format(date, locale);

      // waiting %s seconds, do the next render
      var tid = (0, _timer.run)(function () {
        _this.doRender(node, date, locale);
      }, Math.min((0, _helper.nextInterval)(diff) * 1000, 0x7FFFFFFF));

      // set attribute date-tid
      (0, _helper.setTidAttr)(node, tid);
    }

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
     * Notice: please be sure the dom has attribute `datetime`.
     */

  }, {
    key: 'render',
    value: function render(nodes, locale) {
      var nodeArr = Array.isArray(nodes) ? nodes : [nodes];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = nodeArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var node = _step.value;

          this.doRender(node, getDateAttr(node), locale); // render item
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * format: format the date to *** time ago, with setting or default locale
     * - date: the date / string / timestamp to be formatted
     * - locale: the formatted string's locale name, e.g. en / zh_CN
     *
     * How to use it?
     * var timeago = require('timeago.js')();
     * timeago.format(new Date(), 'pl'); // Date instance
     * timeago.format('2016-09-10', 'fr'); // formated date string
     * timeago.format(1473473400269); // timestamp with ms
     */

  }, {
    key: 'format',
    value: function format(date, locale) {
      return (0, _helper.formatDiff)((0, _helper.diffSec)(date, this.nowDate), locale, this.defaultLocale);
    }
  }]);

  return TimeAgo;
}();