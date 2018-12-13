# timeago.js

> **timeago.js** 是一个非常简洁、轻量级、不到 `1kb` 的很简洁的 Javascript 库，用来将 datetime 时间转化成类似于`*** 时间前`的描述字符串，例如：“3 小时前”。

 - 本地化支持，默认自带中文和英文语言，基本够用；
 - 之前 xxx 时间前、xxx 时间后；
 - 支持自动实时更新；
 - 支持 npm 方式和浏览器 script 方式；
 - 测试用例完善，执行良好；

[Official website](https://timeago.org/)。关于 Python 的版本，可以看 [timeago](https://github.com/hustcc/timeago)。

[![Build Status](https://img.shields.io/travis/hustcc/timeago.js.svg)](https://travis-ci.org/hustcc/timeago.js)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/timeago.js/badge.svg?branch=master)](https://coveralls.io/github/hustcc/timeago.js?branch=master)
[![gzip](https://img.badgesize.io/https://unpkg.com/timeago.js/dist/timeago.min.js?compression=gzip)](https://unpkg.com/timeago.js/dist/timeago.min.js)
[![npm](https://img.shields.io/npm/v/timeago.js.svg)](https://www.npmjs.com/package/timeago.js)
[![npm](https://img.shields.io/npm/dm/timeago.js.svg)](https://www.npmjs.com/package/timeago.js)
[![npm](https://img.shields.io/npm/l/timeago.js.svg)](https://www.npmjs.com/package/timeago.js)


```plain
刚刚
12 秒前
3 分钟前
2 小时前
4 天前
3 周前
6 个月前
3 年前

12 秒后
3 分钟后
2 小时后
24 天后
6 月后
3 年后
```



## 使用方法

 - 安装

```bash
npm install timeago.js
```

 - 引入

```js
// ES6
import { format, render, cancel, register } from 'timeago.js';

// commonjs
const { format, render, cancel, register } = require('timeago.js');
```

或者使用 `script` 在 html 文件中引入，然后就可以使用全局的变量 `timeago`。

```html
<script src="dist/timeago.min.js"></script>
```

 - 使用

```js
// 格式话日期
format('2016-06-12', 'en_US');
```



## API

总共只有 4 个 API：

 - **format(date[, locale = 'en_US', relativeDate = new Date()])**: 格式化日期实例 / 时间戳 / 时间格式字符串。
 - **render(dom[, locale = 'en_US', relativeDate = new Date()])**: 实时渲染格式化一个 dom 元素。
 - **cancel([dom])**: 取消实时渲染。
 - **register(locale, localeFunc)**: 注册一个新的本地语言，目前内置语言包括：`en_US`, `zh_CN`。


## 使用案例

 - format

仅仅就是纯粹的格式化一个日期为字符串。

```js
import { format } from 'timeago.js';

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
 
可是使用 `render` 函数将一个 dom 元素进行自动渲染。

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

`render` 函数的输入必须是一个 dom 元素或者数组，JavaScript dom 和 JQuery 的 dom 均支持。

`cancel` 清楚实时渲染，如果传入 dom，则清除这个 dom 的实时渲染，否则清除所有。

> 被渲染的 dom 元素必须包含一个 `datetime` 属性，用于被格式化的日期。


 - register

默认的语言是 **`en_US`**, 目前内置的语言包括 `en_US` 和 `zh_CN`，你也可以通过这个 API 来注册自己的本地化语言或者个性化语言。

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

目前支持的所有语言在 [locales](src/lang) 可以看到，欢迎 PR 更多的语言。



# LICENSE

MIT@[https://github.com/hustcc](hustcc)
