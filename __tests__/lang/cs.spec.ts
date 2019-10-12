import { advanceTo, clear } from 'jest-date-mock';
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
  describe('time ago', () => {
    test('just now', () => {
      advanceTo(9 * 1000);
      expect(format(date, 'cs')).toEqual('právě teď');
    });

    test('seconds', () => {
      advanceTo(30 * 1000);
      expect(format(date, 'cs')).toEqual('před 30 vteřinami');
    });

    test('minute', () => {
      advanceTo(1000 * 60);
      expect(format(date, 'cs')).toEqual('před minutou');
    });

    test('minutes', () => {
      advanceTo(1000 * 60 * 30);
      expect(format(date, 'cs')).toEqual('před 30 minutami');
    });

    test('hour', () => {
      advanceTo(1000 * 60 * 60);
      expect(format(date, 'cs')).toEqual('před hodinou');
    });

    test('hours', () => {
      advanceTo(1000 * 60 * 60 * 8);
      expect(format(date, 'cs')).toEqual('před 8 hodinami');
    });

    test('yesterday', () => {
      advanceTo(1000 * 60 * 60 * 24);
      expect(format(date, 'cs')).toEqual('včera');
    });

    test('days', () => {
      advanceTo(1000 * 60 * 60 * 24 * 3);
      expect(format(date, 'cs')).toEqual('před 3 dny');
    });

    test('last week', () => {
      advanceTo(1000 * 60 * 60 * 24 * 7);
      expect(format(date, 'cs')).toEqual('minulý týden');
    });

    test('weeks', () => {
      advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
      expect(format(date, 'cs')).toEqual('před 3 týdny');
    });

    test('last month', () => {
      advanceTo(1000 * 60 * 60 * 24 * 31);
      expect(format(date, 'cs')).toEqual('minulý měsíc');
    });

    test('months', () => {
      advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
      expect(format(date, 'cs')).toEqual('před 4 měsíci');
    });

    test('last year', () => {
      advanceTo(1000 * 60 * 60 * 24 * 366);
      expect(format(date, 'cs')).toEqual('před rokem');
    });

    test('years', () => {
      advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
      expect(format(date, 'cs')).toEqual('před 10 lety');
    });
  });

  describe('time in', () => {
    test('just now', () => {
      advanceTo(-9 * 1000);
      expect(format(date, 'cs')).toEqual('právě teď');
    });

    test('seconds', () => {
      advanceTo(-30 * 1000);
      expect(format(date, 'cs')).toEqual('za 30 vteřin');
    });

    test('minute', () => {
      advanceTo(-1000 * 60);
      expect(format(date, 'cs')).toEqual('za minutu');
    });

    test('4 minutes', () => {
      advanceTo(-1000 * 60 * 4);
      expect(format(date, 'cs')).toEqual('za 4 minuty');
    });

    test('5 minutes', () => {
      advanceTo(-1000 * 60 * 5);
      expect(format(date, 'cs')).toEqual('za 5 minut');
    });

    test('hour', () => {
      advanceTo(-1000 * 60 * 60);
      expect(format(date, 'cs')).toEqual('za hodinu');
    });

    test('4 hours', () => {
      advanceTo(-1000 * 60 * 60 * 4);
      expect(format(date, 'cs')).toEqual('za 4 hodiny');
    });

    test('5 hours', () => {
      advanceTo(-1000 * 60 * 60 * 5);
      expect(format(date, 'cs')).toEqual('za 5 hodin');
    });

    test('tomorrow', () => {
      advanceTo(-1000 * 60 * 60 * 24);
      expect(format(date, 'cs')).toEqual('zítra');
    });

    test('4 days', () => {
      advanceTo(-1000 * 60 * 60 * 24 * 4);
      expect(format(date, 'cs')).toEqual('za 4 dny');
    });

    test('5 days', () => {
      advanceTo(-1000 * 60 * 60 * 24 * 5);
      expect(format(date, 'cs')).toEqual('za 5 dnů');
    });

    test('next week', () => {
      advanceTo(-1000 * 60 * 60 * 24 * 7);
      expect(format(date, 'cs')).toEqual('příští týden');
    });

    test('4 weeks', () => {
      advanceTo(-1000 * 60 * 60 * 24 * 7 * 4);
      expect(format(date, 'cs')).toEqual('za 4 týdny');
    });

    test('next month', () => {
      advanceTo(-1000 * 60 * 60 * 24 * 31);
      expect(format(date, 'cs')).toEqual('přístí měsíc');
    });

    test('4 months', () => {
      advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
      expect(format(date, 'cs')).toEqual('za 4 měsíce');
    });

    test('5 months', () => {
      advanceTo(-1000 * 60 * 60 * 24 * 31 * 5);
      expect(format(date, 'cs')).toEqual('za 5 měsíců');
    });

    test('next year', () => {
      advanceTo(-1000 * 60 * 60 * 24 * 366);
      expect(format(date, 'cs')).toEqual('přístí rok');
    });

    test('4 years', () => {
      advanceTo(-1000 * 60 * 60 * 24 * 366 * 4);
      expect(format(date, 'cs')).toEqual('za 4 roky');
    });

    test('5 years', () => {
      advanceTo(-1000 * 60 * 60 * 24 * 366 * 5);
      expect(format(date, 'cs')).toEqual('za 5 let');
    });
  });
});
