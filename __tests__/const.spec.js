/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import {
  IndexMapEn,
  IndexMapZH,
  ATTR_DATA_TID,
  SEC_ARRAY,
} from '../src/constant';


describe('const', () => {
  test('IndexMapEn', () => {
    expect(IndexMapEn).toEqual('second_minute_hour_day_week_month_year'.split('_'));
  });

  test('IndexMapZH', () => {
    expect(IndexMapZH).toEqual('秒_分钟_小时_天_周_月_年'.split('_'));
  });

  test('ATTR_DATA_TID', () => {
    expect(ATTR_DATA_TID).toBe('data-tid');
  });

  test('SEC_ARRAY', () => {
    expect(SEC_ARRAY.length).toBe(6);
  });
});
