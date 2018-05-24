/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import Languages from './lang';

for (const locale in Languages) {
  if (Languages.hasOwnProperty(locale)) {
    timeago.register(locale, Languages[locale]);
  }
}
