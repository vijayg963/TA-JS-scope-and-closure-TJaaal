function forEach() {
  let index = 0;
  return function () {
    return arr[index++];
  };
}

function forEach() {
  let index = 0;
  return function () {
    return index++;
  };
}

let next = forEach([1, 2, 3, 4, 5]);
next();

function addDesignation(title) {
  return function (prefix) {
    return `${prifix} ${title}`;
  };
}
