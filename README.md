# timeago.js

> **timeago.js** is a simple library (less than `2 kb`) that is used to format datetime with `*** time ago` statement. eg: '3 hours ago'.

 - Localization supported.
 - Time `ago` and time `in` supported.
 - Real-time render supported.
 - Nodejs and browserjs supported.
 - Well tested.

[Official website](http://timeago.org/). 中文版说明文档[点这里](README_zh.md)。 React version here: [timeago-react](https://github.com/hustcc/timeago-react). Python version here: [timeago](https://github.com/hustcc/timeago).

[![Build Status](https://img.shields.io/travis/hustcc/timeago.js.svg?style=flat-square)](https://travis-ci.org/hustcc/timeago.js) [![CDNJS](https://img.shields.io/cdnjs/v/timeago.js.svg?style=flat-square)](https://cdnjs.com/libraries/timeago.js) [![npm](https://img.shields.io/npm/v/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js) [![npm](https://img.shields.io/npm/dt/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js) [![npm](https://img.shields.io/npm/l/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js)

Such as

```
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


# 1. Usage

**1. Install timeago.js**

```sh
npm install timeago.js
```

**2. Import timeago.js**

ES6/commonjs import style is supported.

```js
// ES6
import timeago from 'timeago.js';

// commonjs
var timeago = require("timeago.js");
```

or link as a `script` in an html file and access global variable `timeago`.

```js
<script src="dist/timeago.min.js"></script>
```

or import in a typescript file.

```ts
import timeago from 'timeago.js';

// or

import timeago = require("timeago.js");
```

**3. Use `timeago` factory to create a new instance**

```js
var timeagoInstance = timeago();
timeagoInstance.format('2016-06-12');
```


# 2. Detailed Usage

**1. Set relative date**

`timeago` is relative to the current date by default. You can set it yourself.

```js
var timeagoInstance = timeago('2016-06-10 12:12:12'); // set the relative date here.
timeagoInstance.format('2016-06-12', 'zh_CN');
```

**2. Use timestamp**

```js
timeago().format(Date.now() - 11 * 1000 * 60 * 60); // returns '11 hours ago'
```

**3. Automatic rendering**

HTML code：
```html
<div class="needs_to_be_rendered" datetime="2016-06-30 09:20:00"></div>
```
js code
```js
var timeagoInstance = timeago();
var nodes = document.querySelectorAll('.needs_to_be_rendered');
// use render method to render nodes in real time
timeagoInstance.render(nodes, 'zh_CN');
// cancel real-time render for every node
timeago.cancel()
// or for the specific one
timeago.cancel(nodes[0])
```

The input for `render` method should be DOM object/array, pure javascript DOM node or jQuery DOM object.

The `cancel` method clears all the render timers and release all resources of the instance. Optionally it accepts a single node to cancel timer just for it.

The DOM object should have the attribute `datetime` or `data-timeago` with date formatted string.

**4. Localization**

Default locale is **`en`**, and the library supports `en` and `zh_CN`.

```js
var timeagoInstance = timeago();
timeagoInstance.format('2016-06-12', 'zh_CN');
```

You can change the locale in the constructor or use the `setLocale` method:

```js
var timeagoInstance = timeago(currentDate, 'zh_CN');
// or
timeago(currentDate).setLocale('zh_CN');
```

**5. Register local language**

You can register your own language via a static method `register`. Usage example:

```js
// the local dict example is below.
var test_local_dict = function(number, index, total_sec) {
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
timeago.register('test_local', test_local_dict);
// use the locale with timeago instance
var timeagoInstance = timeago();
timeagoInstance.format('2016-06-12', 'test_local');
```

Check out more [locales](locales).

[Locale contributions](#3-contributions) are welcomed, thank you for submitting a GitHub pull request for corrections or additional languages. ^_^~


# 3. Contributions

1. The website is based on [rmm5t/jquery-timeago](https://github.com/rmm5t/jquery-timeago) which is a nice and featured project but it depends on jQuery.

2. **locale translations**: The library needs more locale translations. You can:

 - Open an issue to write the locale translations, or submit a pull request. How to ? see [en's translation](locales/en.js).
 - Please **test** the locale by exec `npm test` or `node tests/locales_test.js`. How to write testcase, see [en's test cases](tests/locales/en.js).


# 4. LICENSE

MIT@[https://github.com/hustcc](hustcc)
