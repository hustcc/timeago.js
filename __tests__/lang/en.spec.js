/**
 * Created by hustccon 18/5/24.
 * Contract: i@hust.cc
 */

import en from '../../src/lang/en';

describe('en', () => {
  test('just now', () => {
    expect(en(4, 0)).toEqual(['just now', 'right now']);
  });
  // TODO
  // test('second', () => {
  //   expect(en(1, 1)).toEqual(['just now', 'right now']);
  // });
  // test('minute', () => {
  //   expect(en(4, 0)).toEqual(['just now', 'right now']);
  // });
  // test('hour', () => {
  //   expect(en(4, 0)).toEqual(['just now', 'right now']);
  // });
  // test('week', () => {
  //   expect(en(4, 0)).toEqual(['just now', 'right now']);
  // });
  // test('month', () => {
  //   expect(en(4, 0)).toEqual(['just now', 'right now']);
  // });
  // test('year', () => {
  //   expect(en(4, 0)).toEqual(['just now', 'right now']);
  // });
});
