/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import timeago from '../src/index';
import { TimeAgo } from '../src/TimeAgo';

describe('index', () => {
  test('timeago', () => {
    expect(timeago).toBeFunction();
    expect(timeago.register).toBeFunction();
    expect(timeago.cancel).toBeFunction();

    expect(timeago() instanceof TimeAgo).toBe(true);
  });
});
