/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { TimeAgo } from './TimeAgo';
import { Locales, register } from './locales'
import { cancel } from './timer';

// 入口函数
const factory = (nowDate, locale) => new TimeAgo(nowDate, locale);

/**
 * 注册语言
 */
factory.register = register;

/**
 * 终止定时器
 */
factory.cancel = cancel;

export default factory;
