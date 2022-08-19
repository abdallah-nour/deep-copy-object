function copyObject(obj = {}) {
  const res = {};
  Object.entries(obj).map(
    ([key, value]) =>
      (res[key] = typeof value === 'object' ? copyObject(value) : value)
  );
  return res;
}

module.exports = copyObject;
