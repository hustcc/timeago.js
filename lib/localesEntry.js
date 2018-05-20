'use strict';

var _lang = require('./lang');

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _iteratorNormalCompletion = true; /**
                                       * Created by hustcc on 18/5/20.
                                       * Contract: i@hust.cc
                                       */

var _didIteratorError = false;
var _iteratorError = undefined;

try {

  for (var _iterator = Object.keys(_lang2.default)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var locale = _step.value;

    timeago.register(locale, _lang2.default[locale]);
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