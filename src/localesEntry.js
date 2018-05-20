/**
 * 将所有的 locales 打包的到一个文件的入口
 * @type {string[]}
 */

import timeago from '.';
import * as AllLocales from '../locales/index.js';

for (const locale of AllLocales) {
  timeago.register(locale, require('../locales/' + locale));
}
