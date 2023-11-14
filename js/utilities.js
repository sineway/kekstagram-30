const request = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

const throttle = (callback, delayBetweenFrames = 500) => {
  let timeoutId, lastCallTime;

  return (...rest) => {
    const elapsedTime = Date.now() - lastCallTime;
    const delay = Math.max(delayBetweenFrames - elapsedTime, 0);

    window.clearTimeout(timeoutId);

    timeoutId = window.setTimeout(() => {
      callback(...rest);
      lastCallTime = Date.now();
    }, delay);
  };
};

export {request, throttle};
