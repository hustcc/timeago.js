/**
 * Created by leoliu1209 on 18/12/11.
 * Contact: cubemail88@gmail.com
 */
import { advanceBy, advanceTo, clear } from 'jest-date-mock';
import { register, format } from '../../src';
import zh_TW from '../../src/lang/zh_TW';

register('zh_TW', zh_TW);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('zh_TW', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'zh_TW')).toEqual('剛剛');

    advanceTo(30 * 1000);
    expect(format(date, 'zh_TW')).toEqual('30 秒前');

    advanceTo(1000 * 60);
    expect(format(date, 'zh_TW')).toEqual('1 分鐘前');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'zh_TW')).toEqual('30 分鐘前');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'zh_TW')).toEqual('1 小時前');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'zh_TW')).toEqual('8 小時前');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'zh_TW')).toEqual('1 天前');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'zh_TW')).toEqual('3 天前');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'zh_TW')).toEqual('1 週前');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'zh_TW')).toEqual('3 週前');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'zh_TW')).toEqual('1 個月前');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'zh_TW')).toEqual('4 個月前');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'zh_TW')).toEqual('1 年前');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'zh_TW')).toEqual('10 年前');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'zh_TW')).toEqual('片刻後');

    advanceTo(-30 * 1000);
    expect(format(date, 'zh_TW')).toEqual('30 秒後');

    advanceTo(-1000 * 60);
    expect(format(date, 'zh_TW')).toEqual('1 分鐘後');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'zh_TW')).toEqual('30 分鐘後');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'zh_TW')).toEqual('1 小時後');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'zh_TW')).toEqual('8 小時後');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'zh_TW')).toEqual('1 天後');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'zh_TW')).toEqual('3 天後');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'zh_TW')).toEqual('1 週後');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'zh_TW')).toEqual('3 週後');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'zh_TW')).toEqual('1 個月後');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'zh_TW')).toEqual('4 個月後');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'zh_TW')).toEqual('1 年後');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'zh_TW')).toEqual('10 年後');
  });
});
