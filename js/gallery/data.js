const applyRandomFilter = (picturesData, itemLimit = 10) => {
  const compare = () => .5 - Math.random();
  return picturesData.toSorted(compare).slice(0, itemLimit);
};

export {applyRandomFilter};
