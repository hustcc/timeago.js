import { vi } from 'vitest';
import { register, format } from '../../src';
import sk from '../../src/lang/sk';

register('sk', sk);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('sk', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'sk')).toEqual('práve teraz');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'sk')).toEqual('pred 30 sekundami');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'sk')).toEqual('pred minútou');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'sk')).toEqual('pred 30 minútami');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'sk')).toEqual('pred hodinou');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'sk')).toEqual('pred 8 hodinami');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'sk')).toEqual('včera');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'sk')).toEqual('pred 3 dňami');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'sk')).toEqual('minulý týždeň');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'sk')).toEqual('pred 3 týždňami');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'sk')).toEqual('minulý mesiac');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'sk')).toEqual('pred 4 mesiacmi');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'sk')).toEqual('pred rokom');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'sk')).toEqual('pred 10 rokmi');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'sk')).toEqual('práve teraz');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'sk')).toEqual('o 30 sekúnd');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'sk')).toEqual('o minútu');

    vi.setSystemTime(-1000 * 60 * 4);
    expect(format(date, 'sk')).toEqual('o 4 minúty');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'sk')).toEqual('o 30 minút');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'sk')).toEqual('o hodinu');

    vi.setSystemTime(-1000 * 60 * 60 * 4);
    expect(format(date, 'sk')).toEqual('o 4 hodiny');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'sk')).toEqual('o 8 hodín');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'sk')).toEqual('zajtra');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'sk')).toEqual('o 3 dni');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'sk')).toEqual('budúci týždeň');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'sk')).toEqual('o 3 týždne');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'sk')).toEqual('budúci mesiac');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'sk')).toEqual('o 4 mesiace');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 8);
    expect(format(date, 'sk')).toEqual('o 8 mesiacov');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'sk')).toEqual('budúci rok');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 4);
    expect(format(date, 'sk')).toEqual('o 4 roky');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'sk')).toEqual('o 10 rokov');
  });
});
