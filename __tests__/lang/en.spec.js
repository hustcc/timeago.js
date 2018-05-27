/**
 * Created by hustccon 18/5/24.
 * Contract: i@hust.cc
 */
import { advance, reset } from 'jest-date-mock';
import Timeago from '../../src';
import en from '../../src/lang/en';

Timeago.register('en', en);

const timeago = Timeago();
let date = new Date();

beforeEach(() => {
  date = new Date();
});
afterEach(() => {
  reset();
});
describe('en', () => {
  test('time ago', () => {
    reset(9 * 1000);
    expect(timeago.format(date, 'en')).toEqual('just now');

    reset(30 * 1000);
    expect(timeago.format(date, 'en')).toEqual('30 seconds ago');

    reset(1000 * 60);
    expect(timeago.format(date, 'en')).toEqual('1 minute ago');

    reset(1000 * 60 * 30);
    expect(timeago.format(date, 'en')).toEqual('30 minutes ago');

    reset(1000 * 60 * 60);
    expect(timeago.format(date, 'en')).toEqual('1 hour ago');

    reset(1000 * 60 * 60 * 8);
    expect(timeago.format(date, 'en')).toEqual('8 hours ago');

    reset(1000 * 60 * 60 * 24);
    expect(timeago.format(date, 'en')).toEqual('1 day ago');

    reset(1000 * 60 * 60 * 24 * 3);
    expect(timeago.format(date, 'en')).toEqual('3 days ago');

    reset(1000 * 60 * 60 * 24 * 7);
    expect(timeago.format(date, 'en')).toEqual('1 week ago');

    reset(1000 * 60 * 60 * 24 * 7 * 3);
    expect(timeago.format(date, 'en')).toEqual('3 weeks ago');

    reset(1000 * 60 * 60 * 24 * 31);
    expect(timeago.format(date, 'en')).toEqual('1 month ago');

    reset(1000 * 60 * 60 * 24 * 31 * 4);
    expect(timeago.format(date, 'en')).toEqual('4 months ago');

    reset(1000 * 60 * 60 * 24 * 366);
    expect(timeago.format(date, 'en')).toEqual('1 year ago');

    reset(1000 * 60 * 60 * 24 * 366 * 10);
    expect(timeago.format(date, 'en')).toEqual('10 years ago');
  });
  test('time in', () => {
    reset(-9 * 1000);
    expect(timeago.format(date, 'en')).toEqual('right now');

    reset(-30 * 1000);
    expect(timeago.format(date, 'en')).toEqual('in 30 seconds');

    reset(-1000 * 60);
    expect(timeago.format(date, 'en')).toEqual('in 1 minute');

    reset(-1000 * 60 * 30);
    expect(timeago.format(date, 'en')).toEqual('in 30 minutes');

    reset(-1000 * 60 * 60);
    expect(timeago.format(date, 'en')).toEqual('in 1 hour');

    reset(-1000 * 60 * 60 * 8);
    expect(timeago.format(date, 'en')).toEqual('in 8 hours');

    reset(-1000 * 60 * 60 * 24);
    expect(timeago.format(date, 'en')).toEqual('in 1 day');

    reset(-1000 * 60 * 60 * 24 * 3);
    expect(timeago.format(date, 'en')).toEqual('in 3 days');

    reset(-1000 * 60 * 60 * 24 * 7);
    expect(timeago.format(date, 'en')).toEqual('in 1 week');

    reset(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(timeago.format(date, 'en')).toEqual('in 3 weeks');

    reset(-1000 * 60 * 60 * 24 * 31);
    expect(timeago.format(date, 'en')).toEqual('in 1 month');

    reset(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(timeago.format(date, 'en')).toEqual('in 4 months');

    reset(-1000 * 60 * 60 * 24 * 366);
    expect(timeago.format(date, 'en')).toEqual('in 1 year');

    reset(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(timeago.format(date, 'en')).toEqual('in 10 years');
  });
});
