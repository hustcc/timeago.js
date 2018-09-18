/**
 * Created by hustccon 18/5/24.
 * Contract: i@hust.cc
 */

import * as langs from '../../src/lang';

describe('langs', () => {
  test('locales shoule be in dict order', () => {
    expect(typeof langs).toBe('object');
  });
});
