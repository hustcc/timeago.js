# timeago.js

> **timeago.js** is a simple library (less then `2.5kb`) to used to format datetime with `*** time ago` statement. eg: '3 hours ago'. 

 - localization supported.
 - time `ago`, time `in` supported.
 - real time render supported.
 - npm and browser supported.
 - well tesed.

中文版说明文档[点这里](README_zh.md)。 Python version here: [timeago](https://github.com/hustcc/timeago).

[![Build Status](https://travis-ci.org/hustcc/timeago.js.svg?branch=master)](https://travis-ci.org/hustcc/timeago.js) [![npm](https://img.shields.io/npm/v/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js) [![npm](https://img.shields.io/npm/dt/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js) [![npm](https://img.shields.io/npm/l/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js)

Such as

```
just now
12 seconds ago
3 minutes ago
2 hours ago
24 days ago
6 months ago
2 years ago

in 12 seconds
in 3 minutes
in 2 hours
in 24 days
in 6 months
in 2 years
```


# Usage

** 1. Install timeago.js **

```sh
npm install timeago.js
```

** 2. import timeago.js **


UMD import is supported, then get global object: `timeago`.

```js
import timeago from 'timeago.js';

// or

var timeago = require("timeago.js");
```

or link with `script` in html files: 

```js
<script src="dist/timeago.min.js"></script>
```

** 3. use class `timeago` **

```js
var timeago = timeago();
timeago.format('2016-06-12')
```


# Detail Usage

** 1. set relative date **

`timeago` is relate to current date default. you can set it by yourself.

```js
var timeago = timeago('2016-06-10 12:12:12'); // set the relative date here.
timeago.format('2016-06-12', 'zh_CN');
```

** 2. use timestamp **

```
timeago().format(new Date().getTime() - 11 * 1000 * 60 * 60); // will get '11 hours ago'
```

** 3. automation render **

HTML code：
```html
<div class="need_to_be_rendered" data-timeago="2016-06-30 09:20:00"></div>
```
js code
```js
// use render to render it realtime
timeago().render(document.querySelectorAll('.need_to_be_render'), 'zh_CN');
// or cancel realtime render
timeago().cancel()
```

The input API `render` should be DOM object / array, support pure javascript node and jQuery dom object.

The API `cancel` will clear all the render timer, release all the resource.

the dom object should has attribute `data-timeago` with date formated string.

** 4. localization **

Default local is **`en`**, and the library supports `en` and `zh_CN`. 

```js
var timeago = timeago();
timeago.format('2016-06-12', 'zh_CN');
```

** 5. register local language **

You can `register` you own language. All keys are needed. e.g.

```js
// the local dict example is below.
var test_local_dict = {
  'JUST_NOW': ["just now", "a while"],
  'SECOND_AGO': ["%s seconds ago", "in %s seconds"],
  'A_MINUTE_AGO': ["1 minute ago", "in 1 minute"],
  'MINUTES_AGO': ["%s minutes ago", "in %s minutes"],
  'AN_HOUR_AGO': ["1 hour ago", "in 1 hour"],
  'HOURS_AGO': ["%s hours ago", "in %s hours"],
  'A_DAY_AGO': ["1 day ago", "in 1 day"],
  'DAYS_AGO': ["%s days ago", "in %s days"],
  'A_MONTH_AGO': ["1 month ago", "in 1 month"],
  'MONTHS_AGO': ["%s months ago", "in %s months"],
  'A_YEAR_AGO': ["1 year ago", "in 1 year"],
  'YEARS_AGO': ["%s years ago", "in %s years"]
}

var timeago = timeago();
timeago.register('test_local', test_local_dict);

timeago.format('2016-06-12', 'test_local');
```


# TODO

 - website page


# LICENSE

MIT