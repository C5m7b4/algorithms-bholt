const linearSearch = (list, item) => {
  let index = -1;

  list.forEach((listItem, i) => {
    if (listItem === item) {
      index = i;
    }
  });

  return { index, result: list[index] };
};

export { linearSearch };
