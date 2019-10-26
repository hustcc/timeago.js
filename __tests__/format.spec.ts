/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { format } from '../src/';
import { formatDiff } from '../src/utils/date';
import { getLocale } from '../src/register';

describe('format', () => {
  test('format', () => {
    const now = new Date();
    expect(format(+now - 5000)).toBe('just now');
    expect(format(+now - 5000, undefined, { relativeDate: now })).toBe('just now');

    expect(format(+now - 1000 * 1000, 'zh_CN')).toBe('16 分钟前');
    expect(format(+now - 1000 * 1000, 'zh_CN', { relativeDate: now })).toBe('16 分钟前');

    expect(format(+now - 1000 * 1000, 'not-exist-locale', { relativeDate: now })).toBe('16 minutes ago');
  });

  test('formatDiff', () => {
    expect(formatDiff(100, getLocale('en'))).toEqual('1 minute ago');
    expect(formatDiff(-1000, getLocale('en'))).toEqual('in 16 minutes');

    expect(formatDiff(-1000, getLocale('en'))).toEqual('in 16 minutes');
    expect(formatDiff(-1000, getLocale('not-exist-locale'))).toEqual('in 16 minutes');
    expect(formatDiff(-1000, getLocale('not-exist-locale'))).toEqual('in 16 minutes');
  });
});
