/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { getTimerId, getDateAttribute, setTimerId } from '../../src/utils/dom';
import { createTimeNode } from '../helper';

const ms = +new Date();
const time = createTimeNode(ms);

describe('dom', () => {
  test('timer id', () => {
    setTimerId(time, 123);

    expect(getTimerId(time)).toEqual(123);

    // @ts-ignore
    expect(() => getTimerId()).toThrow();
  });

  test('getDateAttribute', () => {
    expect(getDateAttribute(time)).toBe(`${ms}`);
  });
});
