function copyObject2(obj = {}) {
  const res = {};
  Object.entries(obj).map(
    ([key, value]) =>
      (res[key] = typeof value === 'object' ? copyObject(value) : value)
  );
  return res;
}

function copyObject(obj = {}) {
  return JSON.parse(JSON.stringify(obj));
}

// or using native Browser function structuredClone()

module.exports = copyObject;
