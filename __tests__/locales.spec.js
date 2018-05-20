/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { Locales, register } from '../src/locales';

describe('locales', () => {
  test('Locales', () => {
    expect(Locales).toContainAllKeys(['en', 'zh_CN']);
  });

  test('register', () => {
    register('fr', () => {});
    expect(Locales).toContainKey('fr');
  });
});
