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
  let aQueue = visited[ya][xa];
  let bQueue = visited[yb][xb];

  let iteration = 0;

  // this is just the same as our graph using a breadth-first-search
  while (aQueue.length && bQueue.length) {
    iteration++;

    // gather aNeighbors
    let aNeighbors = [];
    while (aQueue.length) {
      const coordinate = aQueue.shift();
      aNeighbors = aNeighbors.concat(
        getNeighbors(visited, coordinate.x, coordinate.y)
      );
    }

    // process aNeighbors
    for (let i = 0; i < aNeighbors.length; i++) {
      const neighbor = aNeighbors[i];
      if (neighbor.opendBy === BY_B) {
        return neighbor.length + iteration;
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration;
        neighbor.openedBy = BY_A;
        aQueue.push(neighbor);
      }
    }
  }
  return -1;
};

function getNeighbors(visited, x, y) {
  const neighbors = [];
  if (y - 1 >= 0 && !visited[y - 1][x].closed) {
    // left
    neighbors.push(visited[y - 1][x]);
  }
  if (y + 1 < visited[0].length && !visited[y + 1][x].closed) {
    // right
    neighbors.push(visited[y + 1][x]);
  }
  if (x - 1 >= 0 && !visited[y][x - 1].closed) {
    // up
    neighbors.push(visited[y][x - 1]);
  }
  if (x + 1 < visited.length && !visited[y][x + 1].closed) {
    // down
    neighbors.push(visited[y][x + 1]);
  }

  return neighbors;
}
