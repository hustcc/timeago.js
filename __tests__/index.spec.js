/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import timeago from '../src';
import { TimeAgo } from '../src/TimeAgo';

import timeagoLib from '..';

describe('index', () => {
  test('timeago', () => {
    expect(timeago).toBeFunction();
    expect(timeago.register).toBeFunction();
    expect(timeago.cancel).toBeFunction();

    expect(timeago() instanceof TimeAgo).toBe(true);
  });

  test('timeagoLib', () => {
    expect(timeagoLib).toBeFunction();
    expect(timeagoLib.register).toBeFunction();
    expect(timeagoLib.cancel).toBeFunction();
  });
});
