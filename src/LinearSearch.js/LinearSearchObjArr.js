const linearSearchObjArr = (list, key, value) => {
  let index = -1;
  list.forEach((item, i) => {
    if (item[key] === value) {
      index = i;
    }
  });
  return { index, result: list[index] };
};

export { linearSearchObjArr };
