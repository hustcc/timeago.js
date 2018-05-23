'use strict';

var _lang = require('./lang');

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

for (locale in _lang2.default) {
  if (_lang2.default.hasOwnProperty(locale)) {
    timeago.register(locale, _lang2.default[locale]);
  }
} /**
   * Created by hustcc on 18/5/20.
   * Contract: i@hust.cc
   */