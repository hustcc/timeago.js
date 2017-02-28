/// <reference types="jquery" />
declare var timeago: timeago.TimeagoFactory;

export = timeago;
export as namespace timeago;

declare namespace timeago {
  export interface TimeAgoConstructor {
    ();
    (nowDate: string, defaultLocale?: string);
    format(dateInstance: Date | string | number, locale?: string): string;
    render<T>(nodes: Node | NodeList | JQuery, locale?: string): void;
    cancel(): void;
    setLocale(locale: string): void;
  }
  export interface TimeagoFactory {
    (): TimeAgoConstructor;
    (nowDate: string): TimeAgoConstructor;
    (nowDate: string, defaultLocale: string): TimeAgoConstructor;
    register(locale: string, localeFunc: Function): void;
  }
}
