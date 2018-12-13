/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import * as Languages from './lang';

for (const locale in Languages) {
  timeago.register(locale, Languages[locale]);
}
