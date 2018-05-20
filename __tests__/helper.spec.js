/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { toInt, toDate } from '../src/helper';

describe('helper', () => {
  test('toInt', () => {
    expect(toInt('1')).toEqual(1);
    expect(toInt('a')).toBeNaN();
  });

  test('toDate', () => {
    const now = new Date();
    expect(toDate(now)).toEqual(now);
  });
});
