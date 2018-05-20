/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { Locales, register } from '../src/locales';

describe('locales', () => {
  test('Locales', () => {
    expect(Locales).toContainAllKeys(['en', 'zh_CN']);
  });

  test('Locales zh', () => {
    expect(Locales.zh_CN(1, 0)).toEqual(['刚刚', '片刻后']);
    expect(Locales.zh_CN(1, 1)).toEqual(['1 秒前', '1 秒后']);

    expect(Locales.zh_CN(1, 2)).toEqual(['1 分钟前', '1 分钟后']);
    expect(Locales.zh_CN(1, 3)).toEqual(['1 分钟前', '1 分钟后']);

    expect(Locales.zh_CN(1, 4)).toEqual(['1 小时前', '1 小时后']);
    expect(Locales.zh_CN(1, 5)).toEqual(['1 小时前', '1 小时后']);

    expect(Locales.zh_CN(1, 6)).toEqual(['1 天前', '1 天后']);
    expect(Locales.zh_CN(1, 7)).toEqual(['1 天前', '1 天后']);

    expect(Locales.zh_CN(1, 8)).toEqual(['1 周前', '1 周后']);
    expect(Locales.zh_CN(1, 9)).toEqual(['1 周前', '1 周后']);

    expect(Locales.zh_CN(1, 10)).toEqual(['1 月前', '1 月后']);
    expect(Locales.zh_CN(1, 11)).toEqual(['1 月前', '1 月后']);

    expect(Locales.zh_CN(1, 12)).toEqual(['1 年前', '1 年后']);
    expect(Locales.zh_CN(1, 13)).toEqual(['1 年前', '1 年后']);
  });

  test('Locales en', () => {
    expect(Locales.en(1, 0)).toEqual(['just now', 'right now']);

    expect(Locales.en(1, 1)).toEqual(['1 second ago', 'in 1 second']);
    expect(Locales.en(10, 1)).toEqual(['10 seconds ago', 'in 10 seconds']);

    expect(Locales.en(1, 2)).toEqual(['1 minute ago', 'in 1 minute']);
    expect(Locales.en(1, 3)).toEqual(['1 minute ago', 'in 1 minute']);

    expect(Locales.en(1, 4)).toEqual(['1 hour ago', 'in 1 hour']);
    expect(Locales.en(1, 5)).toEqual(['1 hour ago', 'in 1 hour']);

    expect(Locales.en(1, 6)).toEqual(['1 day ago', 'in 1 day']);
    expect(Locales.en(1, 7)).toEqual(['1 day ago', 'in 1 day']);

    expect(Locales.en(1, 8)).toEqual(['1 week ago', 'in 1 week']);
    expect(Locales.en(1, 9)).toEqual(['1 week ago', 'in 1 week']);

    expect(Locales.en(1, 10)).toEqual(['1 month ago', 'in 1 month']);
    expect(Locales.en(1, 11)).toEqual(['1 month ago', 'in 1 month']);

    expect(Locales.en(1, 12)).toEqual(['1 year ago', 'in 1 year']);
    expect(Locales.en(1, 13)).toEqual(['1 year ago', 'in 1 year']);

    expect(Locales.en(10, 13)).toEqual(['10 years ago', 'in 10 years']);
  });

  test('register', () => {
    register('fr', () => 'test');
    expect(Locales).toContainKey('fr');
    expect(Locales.fr()).toBe('test');
  });
});
