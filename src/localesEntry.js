/**
 * 将所有的 locales 打包的到一个文件的入口
 * @type {string[]}
 */

import timeago from '.';
import AllLocales from '../locales';

for (const locale of AllLocales) {
  timeago.register(locale, require('../locales/' + locale));
}
