import * as langs from '../../src/lang';

describe('langs', () => {
  test('all locales are exported', () => {
    expect(typeof langs).toBe('object');
    expect(Object.keys(langs).length).toBeGreaterThan(50);
  });
});

