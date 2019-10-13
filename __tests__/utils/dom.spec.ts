/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { getTimerId, getDateAttribute, setTimerId } from '../../src/utils/dom';

describe('dom', () => {
  test('getTimerId', () => {
    const node = {
      getAttribute: (name: string): string => '123',
    };

    // @ts-ignore
    expect(getTimerId(node)).toEqual(123);

    expect(() => {
      // @ts-ignore
      getTimerId({});
    }).toThrow();
  });

  test('getDateAttribute', () => {
    const node1 = {
      getAttribute: (name: string): string => {
        if (name === 'datetime') return 'datetime-value';
      },
    };

    // @ts-ignore
    expect(getDateAttribute(node1)).toEqual('datetime-value');
  });

  test('setTimerId', () => {
    const node1 = {
      setAttribute: jest.fn(),
    };

    // @ts-ignore
    setTimerId(node1, 1);

    expect(node1.setAttribute).toBeCalledWith('timeago-tid', 1);
  });
});
