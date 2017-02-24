/// <reference types="jquery" />
export interface TimeAgoConstructor {
    new ();
    new (nowDate: string, defaultLocale?: string);
    format(dateInstance: Date | string | number, locale?: string): string;
    render<T>(nodes: Node | NodeList | JQuery, locale?: string): void;
    cancel(): void;
    setLocale(locale: string): void;
}
export interface TimeagoFactory {
    (): TimeAgoConstructor;
    (nowDate: any): TimeAgoConstructor;
    (nowDate: any, defaultLocale: any): TimeAgoConstructor;
    register(locale: any, localeFunc: any): any;
}
declare let timeagoFactory: TimeagoFactory;
export default timeagoFactory;
