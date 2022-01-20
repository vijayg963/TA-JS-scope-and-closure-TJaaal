function objOfMatchesWithArray(array1, callbacks) {
  return array1.reduce((acc, cv, index) => {
    acc[cv] = callbacks.map((fn) => fn(cv));
    return acc;
  }, {});
}
