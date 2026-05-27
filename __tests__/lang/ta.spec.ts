import { vi } from 'vitest';
import { register, format } from '../../src';
import ta from '../../src/lang/ta';

register('ta', ta);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('ta', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'ta')).toEqual('இப்போது');

    vi.setSystemTime(30000);
    expect(format(date, 'ta')).toEqual('30 நொடிக்கு முன்');

    vi.setSystemTime(60000);
    expect(format(date, 'ta')).toEqual('1 நிமிடத்திற்க்கு முன்');

    vi.setSystemTime(1800000);
    expect(format(date, 'ta')).toEqual('30 நிமிடத்திற்க்கு முன்');

    vi.setSystemTime(3600000);
    expect(format(date, 'ta')).toEqual('1 மணி நேரத்திற்கு முன்');

    vi.setSystemTime(28800000);
    expect(format(date, 'ta')).toEqual('8 மணி நேரத்திற்கு முன்');

    vi.setSystemTime(86400000);
    expect(format(date, 'ta')).toEqual('1 நாளுக்கு முன்');

    vi.setSystemTime(259200000);
    expect(format(date, 'ta')).toEqual('3 நாட்களுக்கு முன்');

    vi.setSystemTime(604800000);
    expect(format(date, 'ta')).toEqual('1 வாரத்திற்கு முன்');

    vi.setSystemTime(1814400000);
    expect(format(date, 'ta')).toEqual('3 வாரங்களுக்கு முன்');

    vi.setSystemTime(2678400000);
    expect(format(date, 'ta')).toEqual('1 மாதத்திற்கு முன்');

    vi.setSystemTime(10713600000);
    expect(format(date, 'ta')).toEqual('4 மாதங்களுக்கு முன்');

    vi.setSystemTime(31622400000);
    expect(format(date, 'ta')).toEqual('1 வருடத்திற்கு முன்');

    vi.setSystemTime(316224000000);
    expect(format(date, 'ta')).toEqual('10 வருடங்களுக்கு முன்');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'ta')).toEqual('சற்று நேரம் முன்பு');

    vi.setSystemTime(-30000);
    expect(format(date, 'ta')).toEqual('30 நொடிகளில்');

    vi.setSystemTime(-60000);
    expect(format(date, 'ta')).toEqual('1 நிமிடத்தில்');

    vi.setSystemTime(-1800000);
    expect(format(date, 'ta')).toEqual('30 நிமிடங்களில்');

    vi.setSystemTime(-3600000);
    expect(format(date, 'ta')).toEqual('1 மணி நேரத்திற்குள்');

    vi.setSystemTime(-28800000);
    expect(format(date, 'ta')).toEqual('8 மணி நேரத்திற்குள்');

    vi.setSystemTime(-86400000);
    expect(format(date, 'ta')).toEqual('1 நாளில்');

    vi.setSystemTime(-259200000);
    expect(format(date, 'ta')).toEqual('3 நாட்களில்');

    vi.setSystemTime(-604800000);
    expect(format(date, 'ta')).toEqual('1 வாரத்தில்');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'ta')).toEqual('3 வாரங்களில்');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'ta')).toEqual('1 மாதத்தில்');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'ta')).toEqual('4 மாதங்களில்');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'ta')).toEqual('1 வருடத்தில்');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'ta')).toEqual('10 வருடங்களில்');
  });
});
