const ROW_COUNT = 21
const COLUMN_COUNT = 10

const buildGrid = (rows, columns) => {
  let grid = []
  for (let i = 0; i < rows; i++) {
    grid.push([])
    for (let j = 0; j < columns; j++) {
      grid[i].push('')
    }
  }
  return grid
}

export const grid = {
    build: () => JSON.parse(JSON.stringify(buildGrid(ROW_COUNT,COLUMN_COUNT))) // double check if i actually need to use parse(stringify()) to ensure a deep copy 
}