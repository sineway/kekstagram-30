const request = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...rest), timeoutDelay);
  };
};

export {request, debounce};
