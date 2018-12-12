/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { getLocale, register } from '../src/locales';

describe('locales', () => {
  test('getLocale', () => {
    expect(getLocale('zh_CN')).toBeDefined();
    expect(getLocale('en_US')).toBeDefined();
  });

  test('Locales zh', () => {
    expect(getLocale('zh_CN')(1, 0)).toEqual(['刚刚', '片刻后']);
    expect(getLocale('zh_CN')(1, 1)).toEqual(['1 秒前', '1 秒后']);

    expect(getLocale('zh_CN')(1, 2)).toEqual(['1 分钟前', '1 分钟后']);
    expect(getLocale('zh_CN')(1, 3)).toEqual(['1 分钟前', '1 分钟后']);

    expect(getLocale('zh_CN')(1, 4)).toEqual(['1 小时前', '1 小时后']);
    expect(getLocale('zh_CN')(1, 5)).toEqual(['1 小时前', '1 小时后']);

    expect(getLocale('zh_CN')(1, 6)).toEqual(['1 天前', '1 天后']);
    expect(getLocale('zh_CN')(1, 7)).toEqual(['1 天前', '1 天后']);

    expect(getLocale('zh_CN')(1, 8)).toEqual(['1 周前', '1 周后']);
    expect(getLocale('zh_CN')(1, 9)).toEqual(['1 周前', '1 周后']);

    expect(getLocale('zh_CN')(1, 10)).toEqual(['1 个月前', '1 个月后']);
    expect(getLocale('zh_CN')(1, 11)).toEqual(['1 个月前', '1 个月后']);

    expect(getLocale('zh_CN')(1, 12)).toEqual(['1 年前', '1 年后']);
    expect(getLocale('zh_CN')(1, 13)).toEqual(['1 年前', '1 年后']);
  });

  test('Locales en', () => {
    expect(getLocale('en_US')(1, 0)).toEqual(['just now', 'right now']);

    expect(getLocale('en_US')(1, 1)).toEqual(['1 second ago', 'in 1 second']);
    expect(getLocale('en_US')(10, 1)).toEqual(['10 seconds ago', 'in 10 seconds']);

    expect(getLocale('en_US')(1, 2)).toEqual(['1 minute ago', 'in 1 minute']);
    expect(getLocale('en_US')(1, 3)).toEqual(['1 minute ago', 'in 1 minute']);

    expect(getLocale('en_US')(1, 4)).toEqual(['1 hour ago', 'in 1 hour']);
    expect(getLocale('en_US')(1, 5)).toEqual(['1 hour ago', 'in 1 hour']);

    expect(getLocale('en_US')(1, 6)).toEqual(['1 day ago', 'in 1 day']);
    expect(getLocale('en_US')(1, 7)).toEqual(['1 day ago', 'in 1 day']);

    expect(getLocale('en_US')(1, 8)).toEqual(['1 week ago', 'in 1 week']);
    expect(getLocale('en_US')(1, 9)).toEqual(['1 week ago', 'in 1 week']);

    expect(getLocale('en_US')(1, 10)).toEqual(['1 month ago', 'in 1 month']);
    expect(getLocale('en_US')(1, 11)).toEqual(['1 month ago', 'in 1 month']);

    expect(getLocale('en_US')(1, 12)).toEqual(['1 year ago', 'in 1 year']);
    expect(getLocale('en_US')(1, 13)).toEqual(['1 year ago', 'in 1 year']);

    expect(getLocale('en_US')(10, 13)).toEqual(['10 years ago', 'in 10 years']);
  });

  test('register', () => {
    const fr = () => 'test';
    register('fr', fr);
    expect(getLocale('fr')).toBe(fr);
    expect(getLocale('fr')()).toBe('test');
  });
});
