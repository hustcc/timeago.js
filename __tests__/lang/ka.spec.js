/**
 * Created by hustccon 18/5/24.
 * Contract: i@hust.cc
 */
import { advanceBy, advanceTo, clear } from 'jest-date-mock';
import Timeago from '../../src';
import ka from '../../src/lang/ka';

Timeago.register('ka', ka);

const timeago = Timeago();
let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('ka', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(timeago.format(date, 'ka')).toEqual('ამ წამს');

    advanceTo(30 * 1000);
    expect(timeago.format(date, 'ka')).toEqual('30 წამის წინ');

    advanceTo(1000 * 60);
    expect(timeago.format(date, 'ka')).toEqual('1 წუთის წინ');

    advanceTo(1000 * 60 * 30);
    expect(timeago.format(date, 'ka')).toEqual('30 წუთის წინ');

    advanceTo(1000 * 60 * 60);
    expect(timeago.format(date, 'ka')).toEqual('1 საათის წინ');

    advanceTo(1000 * 60 * 60 * 8);
    expect(timeago.format(date, 'ka')).toEqual('8 საათის წინ');

    advanceTo(1000 * 60 * 60 * 24);
    expect(timeago.format(date, 'ka')).toEqual('1 დღის წინ');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(timeago.format(date, 'ka')).toEqual('3 დღის წინ');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(timeago.format(date, 'ka')).toEqual('1 კვირის წინ');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(timeago.format(date, 'ka')).toEqual('3 კვირის წინ');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(timeago.format(date, 'ka')).toEqual('1 თვის წინ');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(timeago.format(date, 'ka')).toEqual('4 თვის წინ');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(timeago.format(date, 'ka')).toEqual('1 წლის წინ');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(timeago.format(date, 'ka')).toEqual('10 წლის წინ');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(timeago.format(date, 'ka')).toEqual('ახლა');

    advanceTo(-30 * 1000);
    expect(timeago.format(date, 'ka')).toEqual('30 წამში');

    advanceTo(-1000 * 60);
    expect(timeago.format(date, 'ka')).toEqual('1 წუთში');

    advanceTo(-1000 * 60 * 30);
    expect(timeago.format(date, 'ka')).toEqual('30 წუთში');

    advanceTo(-1000 * 60 * 60);
    expect(timeago.format(date, 'ka')).toEqual('1 საათში');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(timeago.format(date, 'ka')).toEqual('8 საათში');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(timeago.format(date, 'ka')).toEqual('1 დღეში');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(timeago.format(date, 'ka')).toEqual('3 დღეში');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(timeago.format(date, 'ka')).toEqual('1 კვირაში');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(timeago.format(date, 'ka')).toEqual('3 კვირაში');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(timeago.format(date, 'ka')).toEqual('1 თვეში');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(timeago.format(date, 'ka')).toEqual('4 თვეში');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(timeago.format(date, 'ka')).toEqual('1 წელიწადში');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(timeago.format(date, 'ka')).toEqual('10 წელიწადში');
  });
});