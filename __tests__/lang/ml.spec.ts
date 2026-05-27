import { vi } from 'vitest';
import { register, format } from '../../src';
import ml from '../../src/lang/ml';

register('ml', ml);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('ml', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'ml')).toEqual('ഇപ്പോള്\u200d');

    vi.setSystemTime(30000);
    expect(format(date, 'ml')).toEqual('30 സെക്കന്റ്\u200cകള്\u200dക്ക് മുന്\u200dപ്');

    vi.setSystemTime(60000);
    expect(format(date, 'ml')).toEqual('1 മിനിറ്റിനു മുന്\u200dപ്');

    vi.setSystemTime(1800000);
    expect(format(date, 'ml')).toEqual('30 മിനിറ്റുകള്\u200dക്ക് മുന്\u200dപ');

    vi.setSystemTime(3600000);
    expect(format(date, 'ml')).toEqual('1 മണിക്കൂറിനു മുന്\u200dപ്');

    vi.setSystemTime(28800000);
    expect(format(date, 'ml')).toEqual('8 മണിക്കൂറുകള്\u200dക്കു മുന്\u200dപ്');

    vi.setSystemTime(86400000);
    expect(format(date, 'ml')).toEqual('1 ഒരു ദിവസം മുന്\u200dപ്');

    vi.setSystemTime(259200000);
    expect(format(date, 'ml')).toEqual('3 ദിവസങ്ങള്\u200dക് മുന്\u200dപ്');

    vi.setSystemTime(604800000);
    expect(format(date, 'ml')).toEqual('1 ആഴ്ച മുന്\u200dപ്');

    vi.setSystemTime(1814400000);
    expect(format(date, 'ml')).toEqual('3 ആഴ്ചകള്\u200dക്ക് മുന്\u200dപ്');

    vi.setSystemTime(2678400000);
    expect(format(date, 'ml')).toEqual('1 മാസത്തിനു മുന്\u200dപ്');

    vi.setSystemTime(10713600000);
    expect(format(date, 'ml')).toEqual('4 മാസങ്ങള്\u200dക്ക് മുന്\u200dപ്');

    vi.setSystemTime(31622400000);
    expect(format(date, 'ml')).toEqual('1 വര്\u200dഷത്തിനു  മുന്\u200dപ്');

    vi.setSystemTime(316224000000);
    expect(format(date, 'ml')).toEqual('10 വര്\u200dഷങ്ങള്\u200dക്കു മുന്\u200dപ്');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'ml')).toEqual('കുറച്ചു മുന്\u200dപ്');

    vi.setSystemTime(-30000);
    expect(format(date, 'ml')).toEqual('30 സെക്കന്റില്\u200d');

    vi.setSystemTime(-60000);
    expect(format(date, 'ml')).toEqual('1 മിനിറ്റില്\u200d');

    vi.setSystemTime(-1800000);
    expect(format(date, 'ml')).toEqual('30 മിനിറ്റില്\u200d');

    vi.setSystemTime(-3600000);
    expect(format(date, 'ml')).toEqual('1 മണിക്കൂറില്\u200d');

    vi.setSystemTime(-28800000);
    expect(format(date, 'ml')).toEqual('8 മണിക്കൂറില്\u200d');

    vi.setSystemTime(-86400000);
    expect(format(date, 'ml')).toEqual('1 ദിവസത്തില്\u200d');

    vi.setSystemTime(-259200000);
    expect(format(date, 'ml')).toEqual('3 ദിവസങ്ങള്\u200dക്കുള്ളില്\u200d');

    vi.setSystemTime(-604800000);
    expect(format(date, 'ml')).toEqual('1 ആഴ്ചയില്\u200d');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'ml')).toEqual('3 ആഴ്ചകള്\u200dക്കുള്ളില്\u200d');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'ml')).toEqual('1 മാസത്തിനുള്ളില്\u200d');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'ml')).toEqual('4 മാസങ്ങള്\u200dക്കുള്ളില്\u200d');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'ml')).toEqual('1 വര്\u200dഷത്തിനുള്ളില്\u200d');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'ml')).toEqual('10 വര്\u200dഷങ്ങള്\u200dക്കുല്ല്ളില്\u200d');
  });
});
