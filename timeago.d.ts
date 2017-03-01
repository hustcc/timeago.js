/// <reference types="jquery" />
type TDate = Date | string | number;
export interface TimeAgoConstructor {
    new ();
    new (nowDate: TDate, defaultLocale?: string);
    format(date: TDate, locale?: string): string;
    render<T>(nodes: Node | NodeList | JQuery, locale?: string): void;
    setLocale(locale: string): void;
}
export interface TimeagoFactory {
    (): TimeAgoConstructor;
    (nowDate: TDate, defaultLocale?: string): TimeAgoConstructor;
    cancel(node?: Node | JQuery): void;
    register(locale: string, localeFunc: Function): void;
}
declare let timeagoFactory: TimeagoFactory;
export default timeagoFactory;