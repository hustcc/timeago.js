/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { format, render, cancel, register } from '.';
import * as Languages from './lang';
import { LocaleFunc } from './interface';

Object.keys(Languages).forEach((locale: string) => {
  register(locale, (Languages as Record<string, LocaleFunc>)[locale]);
});

export { format, render, cancel, register };
export * from './interface';
