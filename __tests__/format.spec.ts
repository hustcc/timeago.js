/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { format } from '../src/';

describe('format', () => {
  test('format', () => {
    const now = new Date();
    expect(format(+now - 5000)).toBe('just now');
    expect(format(+now - 5000, undefined, { relativeDate: now })).toBe('just now');

    expect(format(+now - 1000 * 1000, 'zh_CN')).toBe('16 分钟前');
    expect(format(+now - 1000 * 1000, 'zh_CN', { relativeDate: now })).toBe('16 分钟前');

    expect(format(+now - 1000 * 1000, 'not-exist-locale', { relativeDate: now })).toBe('16 minutes ago');
  });
});
