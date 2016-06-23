# timeago.js

> **timeago.js** is a simple library (only `2kb`) to used to format datetime with `*** time ago` statement. eg: '3 hours ago'. 

 - localization supported.
 - time ago, time in supported.
 - npm and browser supported.

Python version here. [timeago](https://github.com/hustcc/timeago).

[![npm](https://img.shields.io/npm/v/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js) [![npm](https://img.shields.io/npm/dt/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js) [![npm](https://img.shields.io/npm/l/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js)

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

**1. Install timeago.js**

```sh
npm install timeago.js
```

**2. import timeago.js**


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

**3. use class `timeago`**

```js
var timeago = timeago();
timeago.format('2016-06-12')
```


# Detail Usage

**1. localization **

Default local is **`en`**, and the library supports `en` and `zh_CN`. 

```js
var timeago = timeago();
timeago.format('2016-06-12', 'zh_CN');
```

**2. register local language **

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

**3. set relative date **

`timeago` is relate to current date default. you can set it by yourself.

```js
var timeago = timeago('2016-06-10 12:12:12'); // set the relative date here.
timeago.format('2016-06-12', 'zh_CN');
```

# TODO

 - testcase by travis
 - website page

# LICENSE

MIT