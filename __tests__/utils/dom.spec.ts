import { getTimerId, getDateAttribute, setTimerId } from '../../src/utils/dom';
import { createTimeNode } from '../helper';

const ms = +new Date();
const time = createTimeNode(ms);

describe('dom', () => {
  test('timer id', () => {
    setTimerId(time, 123);
    expect(getTimerId(time)).toEqual(123);
    expect(() => getTimerId(null as unknown as HTMLElement)).toThrow();
  });

  test('getDateAttribute', () => {
    expect(getDateAttribute(time)).toBe(`${ms}`);
  });
});

