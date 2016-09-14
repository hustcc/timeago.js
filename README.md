# timeago.js

> **timeago.js** is a simple library (less then `2 kb`) to used to format datetime with `*** time ago` statement. eg: '3 hours ago'.

 - Localization supported.
 - Time `ago` and time `in` supported.
 - Real-time render supported.
 - Nodejs and browserjs supported.
 - Well tested.

[Official website](http://timeago.org/). 中文版说明文档[点这里](README_zh.md)。 React version here: [timeago-react](https://github.com/hustcc/timeago-react). Python version here: [timeago](https://github.com/hustcc/timeago).

[![Build Status](https://travis-ci.org/hustcc/timeago.js.svg?branch=master)](https://travis-ci.org/hustcc/timeago.js) [![npm](https://img.shields.io/npm/v/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js) [![npm](https://img.shields.io/npm/dt/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js) [![npm](https://img.shields.io/npm/l/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js)

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

**2. import timeago.js**


ES6 style is supported, then get global object: `timeago`.

```js
import timeago from 'timeago.js';

// or

var timeago = require("timeago.js");
```

or link with `script` in html files:

```js
<script src="dist/timeago.min.js"></script>
```

**3. Use class `timeago`**

```js
var timeago = timeago();
timeago.format('2016-06-12')
```


# 2. Detailed Usage

**1. Set relative date**

`timeago` is relate to current date default. you can set it by yourself.

```js
var timeago = timeago('2016-06-10 12:12:12'); // set the relative date here.
timeago.format('2016-06-12', 'zh_CN');
```

**2. Use timestamp**

```
timeago().format(new Date().getTime() - 11 * 1000 * 60 * 60); // will get '11 hours ago'
```

**3. Automatic rendering**

HTML code：
```html
<div class="need_to_be_rendered" data-timeago="2016-06-30 09:20:00"></div>
```
js code
```js
// use render to render it realtime
timeago().render(document.querySelectorAll('.need_to_be_rendered'), 'zh_CN');
// or cancel realtime render
timeago().cancel()
```

The input API `render` should be DOM object/array, support pure Javascript, Node, and jQuery DOM object.

The API `cancel` will clear all the render timers and release all the resources.

The DOM object should have the attribute `data-timeago` with date formated string.

**4. Localization**

Default locale is **`en`**, and the library supports `en` and `zh_CN`.

```js
var timeago = timeago();
timeago.format('2016-06-12', 'zh_CN');
```

You can change the locale in the constructor or use the `setLocale` method;

```js
var timeago = timeago(null, 'zh_CN');
// or
timeago().setLocale('zh_CN');
```

**5. Register local language**

You can `register` you own language. All keys are needed. e.g.

```js
// the local dict example is below.
var test_local_dict = function(number, index) {
  // number: the timeago / timein number;
  // index: the index of array below;
  return [
    ['just now', 'a while'],
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

var timeago = timeago();
timeago.register('test_local', test_local_dict);

timeago.format('2016-06-12', 'test_local');
```

You can see [locales](locales) dir for more locales. 

Please submit a GitHub pull request for corrections or additional languages, add locale key into `locales/locales.js`, and add the locale testcases into `tests/locales` dir.


# 3. Contributions

1. The website is based on [rmm5t/jquery-timeago](https://github.com/rmm5t/jquery-timeago) which is a nice and featured project but depends on jQuery.

2. **locale translations**: The library need the locale translations. You can:

 - Open an issue to write the locale translations, how to ? see [here](https://github.com/hustcc/timeago.js/blob/master/locales/en.js).
 - Or pull a request, please **test** it before by exec `npm test` or `node tests/locales_test.js`.


# 4. LICENSE

MIT
