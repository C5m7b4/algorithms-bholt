import { logMaze } from './logger';

const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

const generateVisited = (maze) => {
  const visited = [];
  for (let y = 0; y < maze.length; y++) {
    const yAxis = [];
    for (let x = 0; x < maze[y].length; x++) {
      const coordinate = {
        closed: maze[y][x] === 1,
        length: 0,
        openedBy: NO_ONE,
      };
      yAxis.push(coordinate);
    }
    visited.push(yAxis);
  }
  return visited;
};

export const findShortestPath = (maze, [xa, ya], [xb, yb]) => {
  const visited = generateVisited(maze);

  visited[ya][xa].openedBy = BY_A;
  visited[yb][xb].openedBy = BY_B;
  console.log(visited);
  // here we should be able to see something usefull
  // create our branch here
};
