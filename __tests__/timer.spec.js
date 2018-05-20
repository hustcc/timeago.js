/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { Timers, run, cancel } from '../src/timer';

describe('timer', () => {
  test('run', () => {
    const fn = jest.fn();
    expect(run(fn, 100)).toBeNumber();
  });
});
