/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import {
  getTimerId,
  saveTimerId,
  getDateAttribute
} from '../../src/utils/dom';

describe('dom', () => {
  test('getTimerId', () => {
    const node = {
      getAttribute: name => `${name}-native`,
    };

    const jqNode = {
      attr: name => `${name}-jq`,
    };
    expect(getTimerId(node)).toEqual('timeago-tid-native');

    expect(getTimerId(jqNode)).toEqual('timeago-tid-jq');

    expect(getTimerId({})).toEqual(undefined);
  });

  test('getDateAttribute', () => {
    const node1 = {
      getAttribute: name => {
        if (name === 'datetime') return 'datetime-value';
      },
    };

    const node2 = {
      attr: name => {
        if (name === 'datetime') return 'datetime-value';
      },
    };

    expect(getDateAttribute(node1)).toEqual('datetime-value');
    expect(getDateAttribute(node2)).toEqual('datetime-value');
  });

  test('saveTimerId', () => {
    const node1 = {
      setAttribute: jest.fn(),
    };

    const node2 = {
      attr: jest.fn(),
    };

    saveTimerId({}, 0);
    saveTimerId(node1, 1);
    saveTimerId(node2, 2);

    expect(node1.setAttribute).toBeCalledWith('timeago-tid', 1);
    expect(node2.attr).toBeCalledWith('timeago-tid', 2);
  });
});
