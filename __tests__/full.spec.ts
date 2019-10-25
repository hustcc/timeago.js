/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { format, render, cancel, register } from '../src/full';
import * as Locales from '../src/lang';
import { getLocale } from '../src/register';

describe('timeago.js full', () => {
  test('export', () => {
    expect(format).toBeInstanceOf(Function);
    expect(render).toBeInstanceOf(Function);
    expect(cancel).toBeInstanceOf(Function);
    expect(register).toBeInstanceOf(Function);
  });

  test('locales', () => {
    Object.keys(Locales).forEach((key: string) => {
      expect(getLocale(key)).toBe(Locales[key]);
    });
  });
});
