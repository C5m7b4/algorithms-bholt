import Node from './Node';

const createTrie = (words) => {
  const root = new Node('');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    root.add(word.toLowerCase());
  }

  return root;
};

export { createTrie };
