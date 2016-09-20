/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * https://github.com/hustcc/timeago.js
**/
var allLocales = require('../locales/locales.js');
var locale = null;
for (var i = allLocales.length - 1; i >= 0; i--) {
  locale = allLocales[i];
  if (locale != 'en' && locale != 'zh_CN')
    timeago.register(locale, require('../locales/' + locale));
};
