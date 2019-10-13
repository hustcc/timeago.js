const ATTR_TIMEAGO_TID = 'timeago-id';

/**
 * get the datetime attribute, `datetime` are supported.
 * @param node
 * @returns {*}
 */
export function getDateAttribute(node: HTMLElement): string {
  return node.getAttribute('datetime');
}

/**
 * set the node attribute, native DOM
 * @param node
 * @param timerId
 * @returns {*}
 */
export function setTimerId(node: HTMLElement, timerId: number): void {
  // @ts-ignore
  node.setAttribute(ATTR_TIMEAGO_TID, timerId);
}

/**
 * get the timer id
 * @param node
 */
export function getTimerId(node: HTMLElement): number {
  return parseInt(node.getAttribute(ATTR_TIMEAGO_TID));
}
