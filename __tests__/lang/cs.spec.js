import { advanceBy, advanceTo, clear } from 'jest-date-mock';
import { register, format } from '../../src';
import cs from '../../src/lang/cs';

register('cs', cs);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('cs', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'cs')).toEqual('právě teď');

    advanceTo(30 * 1000);
    expect(format(date, 'cs')).toEqual('před 30 vteřinami');

    advanceTo(1000 * 60);
    expect(format(date, 'cs')).toEqual('před minutou');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'cs')).toEqual('před 30 minutami');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'cs')).toEqual('před hodinou');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'cs')).toEqual('před 8 hodinami');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'cs')).toEqual('včera');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'cs')).toEqual('před 3 dny');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'cs')).toEqual('minulý týden');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'cs')).toEqual('před 3 týdny');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'cs')).toEqual('minulý měsíc');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'cs')).toEqual('před 4 měsíci');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'cs')).toEqual('vloni');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'cs')).toEqual('před 10 lety');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'cs')).toEqual('právě teď');

    advanceTo(-30 * 1000);
    expect(format(date, 'cs')).toEqual('za 30 vteřin');

    advanceTo(-1000 * 60);
    expect(format(date, 'cs')).toEqual('za minutu');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'cs')).toEqual('za 30 minut');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'cs')).toEqual('za hodinu');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'cs')).toEqual('za 8 hodin');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'cs')).toEqual('zítra');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'cs')).toEqual('za 3 dny');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'cs')).toEqual('příští týden');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'cs')).toEqual('za 3 týdnů');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'cs')).toEqual('přístí měsíc');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 5);
    expect(format(date, 'cs')).toEqual('za 5 měsíců');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'cs')).toEqual('přístí rok');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'cs')).toEqual('za 10 let');
  });
});
