const ATTR_TIMEAGO_TID = 'timeago-tid';
const ATTR_DATETIME = 'datetime';

/**
 * get the node attribute, native DOM and jquery supported.
 * @param node
 * @param name
 * @returns {*}
 */
const getAttribute = (node, name) => {
  if (node.getAttribute) return node.getAttribute(name); // native dom
  if (node.attr) return node.attr(name); // jquery dom
};

/**
 * get the datetime attribute, `data-timeagp` / `datetime` are supported.
 * @param node
 * @returns {*}
 */
export const getDateAttribute = node => getAttribute(node, ATTR_DATETIME);

/**
 * set the node attribute, native DOM and jquery supported.
 * @param node
 * @param timerId
 * @returns {*}
 */
export const saveTimerId = (node, timerId) => {
  if (node.setAttribute) return node.setAttribute(ATTR_TIMEAGO_TID, timerId);
  if (node.attr) return node.attr(ATTR_TIMEAGO_TID, timerId);
};

export const getTimerId = node => getAttribute(node, ATTR_TIMEAGO_TID);
