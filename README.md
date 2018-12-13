# timeago.js

> **timeago.js** is a simple library (less than `1 kb`) that is used to format datetime with `*** time ago` statement. eg: '3 hours ago'.

 - Localization supported.
 - Time `ago` and time `in` supported.
 - Real-time render supported.
 - Nodejs and browserjs supported.
 - Well tested.

[Official website](https://timeago.org/). 中文版说明文档[点这里](README_zh.md)。 React version here: [timeago-react](https://github.com/hustcc/timeago-react). Python version here: [timeago](https://github.com/hustcc/timeago).

[![Build Status](https://img.shields.io/travis/hustcc/timeago.js.svg)](https://travis-ci.org/hustcc/timeago.js)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/timeago.js/badge.svg?branch=master)](https://coveralls.io/github/hustcc/timeago.js?branch=master)
[![gzip](https://img.badgesize.io/https://unpkg.com/timeago.js/dist/timeago.min.js?compression=gzip)](https://unpkg.com/timeago.js/dist/timeago.min.js)
[![npm](https://img.shields.io/npm/v/timeago.js.svg)](https://www.npmjs.com/package/timeago.js)
[![npm](https://img.shields.io/npm/dm/timeago.js.svg)](https://www.npmjs.com/package/timeago.js)
[![npm](https://img.shields.io/npm/l/timeago.js.svg)](https://www.npmjs.com/package/timeago.js)


Such as

```plain
just now
12 seconds ago
3 minutes ago
2 hours ago
3 days ago
3 weeks ago
6 months ago
2 years ago

in 12 seconds
in 3 minutes
in 2 hours
in 24 days
in 6 months
in 2 years
```



## Usage

 - Install

```bash
npm install timeago.js
```

 - Import

```js
// ES6
import { format, render, cancel, register } from 'timeago.js';

// commonjs
const { format, render, cancel, register } = require('timeago.js');
```

or import with `script` in html file and access global variable `timeago`.

```html
<script src="dist/timeago.min.js"></script>
```

 - Usage

```js
// format the time with locale
format('2016-06-12', 'en_US');
```



## API

There only 4 API:

 - **format(date[, locale = 'en_US', relativeDate = new Date()])**: format a Date instance / timestamp / date string to string.
 - **render(dom[, locale = 'en_US', relativeDate = new Date()])**: make a dom automatic rendering.
 - **cancel([dom])**: cancel automatic rendering.
 - **register(locale, localeFunc)**: register a new locale, build-in locale contains: `en_US`, `zh_CN`.


## Case

 - format

Just format date into a string.

```js
import { format, render, cancel, register } from 'timeago.js';

// format timestamp
format(1544666010224);
// format date instance
format(new Date(1544666010224));
// format date string
format('2018-12-12');

// format with locale
format(1544666010224, 'zh_CN');

// format with locale and relative date
format(1544666010224, 'zh_CN', '2018-11-11');

// e.g.
format(Date.now() - 11 * 1000 * 60 * 60); // returns '11 hours ago'
``` 


 - render & cancel
 
You can `render` a dom node with automatic rendering.

HTML code:

```html
<div class="needs_to_be_rendered" datetime="2016-06-30 09:20:00"></div>
```

Javascript code:

```js
var nodes = document.querySelectorAll('.needs_to_be_rendered');

// use render method to render nodes in real time
timeago.render(nodes, 'zh_CN');

// cancel all real-time render task
timeago.cancel();

// or cancel for the specific one
timeago.cancel(nodes[0])
```

The input for `render` method should be DOM object / array, pure javascript DOM node or jQuery DOM object supported.

The `cancel` method clears all the render timers and release all resources of the instance. Optionally it accepts a single node to cancel timer just for it.

> The DOM object should have the attribute `datetime` with date formatted string.


 - register

Default locale is **`en_US`**, and the library supports `en_US` and `zh_CN`. You can register your own language with `register`.

```js
// the local dict example is below.
const localeFunc = (number, index, total_sec) => {
  // number: the timeago / timein number;
  // index: the index of array below;
  // total_sec: total seconds between date to be formatted and today's date;
  return [
    ['just now', 'right now'],
    ['%s seconds ago', 'in %s seconds'],
    ['1 minute ago', 'in 1 minute'],
    ['%s minutes ago', 'in %s minutes'],
    ['1 hour ago', 'in 1 hour'],
    ['%s hours ago', 'in %s hours'],
    ['1 day ago', 'in 1 day'],
    ['%s days ago', 'in %s days'],
    ['1 week ago', 'in 1 week'],
    ['%s weeks ago', 'in %s weeks'],
    ['1 month ago', 'in 1 month'],
    ['%s months ago', 'in %s months'],
    ['1 year ago', 'in 1 year'],
    ['%s years ago', 'in %s years']
  ][index];
};
// register your locale with timeago
register('my-locale', localeFunc);

// use it
format('2016-06-12', 'my-locale');
```

Check out more [locales](src/lang).



## Contributions

1. The website is based on [rmm5t/jquery-timeago](https://github.com/rmm5t/jquery-timeago) which is a nice and featured project but it depends on jQuery.

2. **locale translations**: The library needs more locale translations. You can:

 - Open an issue to write the locale translations, or submit a pull request. How to ? see [locales translation](src/lang/).
 - Please **test** the locale by exec `npm test`. How to write testcase, see [locales test cases](__tests__/lang/).



# LICENSE

MIT@[https://github.com/hustcc](hustcc)
