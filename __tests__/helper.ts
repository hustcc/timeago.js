/**
 * 创建一个 time 节点
 */
export function createTimeNode(timestamp?: number): HTMLElement {
  const time = document.createElement('time');
  document.body.append(time);

  if (timestamp) time.setAttribute('datetime', `${timestamp}`);

  return time;
}

/**
 * 延迟 ms
 * @param ms
 */
export function delay(ms = 1100): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
