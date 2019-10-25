/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { getLocale, register } from '../src/register';

describe('register', () => {
  test('register', () => {
    const test = (diff: number, idx: number, totalSec: number) => ['test', 'locale'] as [string, string];
    register('test', test);

    expect(getLocale('test')).toBe(test);
    expect(getLocale('test')(1, 1)).toEqual(['test', 'locale']);
  });
});
