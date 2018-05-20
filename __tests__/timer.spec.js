/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { Timers, run, cancel } from '../src/timer';

jest.useFakeTimers();

describe('timer', () => {
  test('run', () => {
    const fn = jest.fn();
    expect(run(fn, 100)).toBeNumber();

    expect(Object.keys(Timers).length).toBe(1);

    jest.runTimersToTime(10);
    expect(Object.keys(Timers).length).toBe(1);
    expect(fn).not.toHaveBeenCalled();

    jest.runTimersToTime(200);
    expect(Object.keys(Timers).length).toBe(0);
    expect(fn).toHaveBeenCalled();
  });

  test('cancel', () => {
    const t1 = run(jest.fn(), 100);
    const t2 = run(jest.fn(), 200);
    const t3 = run(jest.fn(), 300);

    expect(Object.keys(Timers).length).toBe(3);

    // invalid cancel
    cancel({ attr: () => '' });
    expect(Object.keys(Timers).length).toBe(3);

    // cancel one
    cancel({ attr: () => t1 });
    expect(Object.keys(Timers).length).toBe(2);

    // cancel all
    cancel();
    expect(Object.keys(Timers).length).toBe(0);
  });
});
