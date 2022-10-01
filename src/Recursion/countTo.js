const countTo = (max, current) => {
  if (current > max) return current;
  console.log(current);
  return countTo(max, current + 1);
};

export { countTo };
