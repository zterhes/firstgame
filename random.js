const makeRandom = (min, max) => {
  const diff = max - min;
  const rand = Math.floor(Math.random() * diff + min);
  return rand;
};

module.exports = {
  makeRandom
};
