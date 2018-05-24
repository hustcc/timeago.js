/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { TimeAgo } from '../src/TimeAgo';

jest.useFakeTimers();

describe('TimeAgo', () => {
  test('constructor', () => {
    expect(TimeAgo).toBeDefined();

    let timeago = new TimeAgo();
    expect(timeago.defaultLocale).toBe('en');
    expect(timeago.nowDate).toBe(undefined);

    timeago = new TimeAgo(712627200000, 'zh_CN');
    expect(timeago.defaultLocale).toBe('zh_CN');
    expect(timeago.nowDate).toBe(712627200000);
  });

  test('setLocale', () => {
    const timeago = new TimeAgo();

    timeago.setLocale('zh_CN');
    expect(timeago.defaultLocale).toBe('zh_CN');
  });

  test('format', () => {
    const timeago = new TimeAgo();

    expect(timeago.format(new Date() - 7000)).toBe('just now');

    expect(timeago.format(new Date() - 1000 * 1000, 'zh_CN')).toBe('16 分钟前');
  });

  // TODO fill with jsdom
  test('render', () => {
    const timeago = new TimeAgo();

    // render array
    timeago.render([{}]);
    jest.advanceTimersByTime(30000);

    // render node
    timeago.render({});
    jest.advanceTimersByTime(30000);
    expect(timeago.format(new Date() - 1000 * 1000, 'zh_CN')).toBe('16 分钟前');
  });
});
