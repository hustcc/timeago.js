/// <reference types="jquery" />
type TDate = Date | string | number;

export declare function format(date: TDate, locale?: string, relativeDate?: TDate): string;
export declare function render<T>(nodes: Node | NodeList | JQuery, locale?: string, relativeDate?: TDate): void;
export declare function cancel(node?: Node | JQuery): void;
export declare function register(locale: string, localeFunc: Function): void;
