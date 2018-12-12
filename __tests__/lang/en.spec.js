/**
 * Created by hustcc on 18/5/24.
 * Contact: i@hust.cc
 */
import { advanceBy, advanceTo, clear } from 'jest-date-mock';
import { format, register } from '../../src';
import en from '../../src/lang/en';

register('en', en);


let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('en', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'en')).toEqual('just now');

    advanceTo(30 * 1000);
    expect(format(date, 'en')).toEqual('30 seconds ago');

    advanceTo(1000 * 60);
    expect(format(date, 'en')).toEqual('1 minute ago');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'en')).toEqual('30 minutes ago');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'en')).toEqual('1 hour ago');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'en')).toEqual('8 hours ago');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'en')).toEqual('1 day ago');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'en')).toEqual('3 days ago');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'en')).toEqual('1 week ago');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'en')).toEqual('3 weeks ago');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'en')).toEqual('1 month ago');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'en')).toEqual('4 months ago');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'en')).toEqual('1 year ago');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'en')).toEqual('10 years ago');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'en')).toEqual('right now');

    advanceTo(-30 * 1000);
    expect(format(date, 'en')).toEqual('in 30 seconds');

    advanceTo(-1000 * 60);
    expect(format(date, 'en')).toEqual('in 1 minute');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'en')).toEqual('in 30 minutes');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'en')).toEqual('in 1 hour');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'en')).toEqual('in 8 hours');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'en')).toEqual('in 1 day');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'en')).toEqual('in 3 days');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'en')).toEqual('in 1 week');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'en')).toEqual('in 3 weeks');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'en')).toEqual('in 1 month');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'en')).toEqual('in 4 months');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'en')).toEqual('in 1 year');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'en')).toEqual('in 10 years');
  });
});
