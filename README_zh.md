# timeago.js

> **timeago.js** 是一个非常简洁、轻量级、不到 `2kb` 的很简洁的 Javascript 库，用来将 datetime 时间转化成类似于`*** 时间前`的描述字符串，例如：“3小时前”。

 - 本地化支持，默认自带中文和英文语言，基本够用；
 - 之前 xxx 时间前、xxx 时间后；
 - 支持自动实时更新；
 - 支持npm方式和浏览器script方式；
 - 测试用例完善，执行良好；

[Official website](http://timeago.org/)。关于Python的版本，可以看 [timeago](https://github.com/hustcc/timeago).

[![Build Status](https://img.shields.io/travis/hustcc/timeago.js.svg?style=flat-square)](https://travis-ci.org/hustcc/timeago.js) [![CDNJS](https://img.shields.io/cdnjs/v/timeago.js.svg?style=flat-square)](https://cdnjs.com/libraries/timeago.js) [![npm](https://img.shields.io/npm/v/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js) [![npm](https://img.shields.io/npm/dt/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js) [![npm](https://img.shields.io/npm/l/timeago.js.svg?style=flat-square)](https://www.npmjs.com/package/timeago.js)

```
刚刚
12秒前
3分钟前
2小时前
4天前
3周前
6月前
3年前

12秒后
3分钟后
2小时后
24天后
6月后
3年后
```


# 使用方法

**1. 下载 timeago.js**

```sh
npm install timeago.js
```

**2. 引入 timeago.js**

使用import引入，然后可以得到一个全局变量: `timeago`.

```js
import timeago from 'timeago.js';

// 或者

var timeago = require("timeago.js");
```

或者直接通过 `script` 标签引入到html文件中.

```js
<script src="dist/timeago.min.js"></script>
```

或者在 typescript 文件中引入.

```ts
import timeago from 'timeago.js';

// or

import timeago = require("timeago.js");
```

**3. 使用 `timeago` 类**

```js
var timeago = timeago();
timeago.format('2016-06-12')
```


# 高级特性使用


**1. 设置相对日期**

`timeago` 默认是相对于当前时间的，当然也可以自己设置相对的时间，如下所示：

```js
var timeagoInstance = timeago(null, '2016-06-10 12:12:12'); // 在这里设置相对时间
timeagoInstance.format('2016-06-12', 'zh_CN');
```

**2. 格式化时间戳，字符串**

```js
timeago().format(Date.now() - 11 * 1000 * 60 * 60); // will get '11 hours ago'
```

**3. 自动实时渲染**

HTML为：
```html
<div class="need_to_be_rendered" data-timeago="2016-06-30 09:20:00"></div>
```
Js代码为：
```js
var timeagoInstance = timeago();
timeagoInstance.render(document.querySelectorAll('.need_to_be_rendered'), 'zh_CN');

// or

timeagoInstance.cancel()
```

API方法 `render` 可以传入一个DOM节点或者数据，标示需要实时渲染这些节点。

API方法 `cancel` 调用之后会清除所有的定时器方法，并且释放所有定时器资源。当然也可以传入一个 node 节点，仅仅曲线这个节点的定时器方法。

被渲染的节点必须要有 `datetime` 或者 `data-timeago` 属性，属性值为日期格式的字符串。

**4. 本地化**

默认的语言是英文 **`en`**, 这个库自带语言有 `en` and `zh_CN` （英文和中文）.

```js
var timeagoInstance = timeago();
timeagoInstance.format('2016-06-12', 'zh_CN');
```

可以在构造函数中传入默认语言，也可以调用 `setLocale` 方法。

```js
var timeagoInstance = timeago(currentDate, 'zh_CN');
// or
timeago().setLocale('zh_CN');
```

**5. 注册本地语言**

你可以自己自定义注册 `register` 你自己的语言。 如下所示，所有的键值都必须存在，不然可能会出错。 e.g.

```js
// 本地化的字典样式
var test_local_dict = function(number, index, total_sec) {
  // number：xxx 时间前 / 后的数字；
  // index：下面数组的索引号；
  // total_sec：时间间隔的总秒数；
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

timeago.register('test_local', test_local_dict);

var timeagoInstance = timeago();
timeagoInstance.format('2016-06-12', 'test_local');
```
欢迎发起 PR 添加一些缺失的 locale 语言，当然请注意，在 `tests/locales` 目录中添加对应的测试用例。

# LICENSE

MIT@[https://github.com/hustcc](hustcc)
