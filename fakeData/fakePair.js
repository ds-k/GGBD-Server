const fakePair = (oneCount, manyCount, oneLabel, manyLabel) => {
  const result = [];
  for (let i = 1; i <= oneCount; i += 1) {
    const obj = {
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    obj[oneLabel] = i;
    obj[manyLabel] = Math.floor(Math.random() * manyCount) + 1;

    result.push(obj);
  }
  return result;
};

module.exports = fakePair;
