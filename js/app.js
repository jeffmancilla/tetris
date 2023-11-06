//constants
const ROW_COUNT = 21
const COLUMN_COUNT = 10
const I = [[], ['i', 'i', 'i', 'i']]
//variables
let field
//elements
const fieldSection = document.querySelector('#field')

//functions

const buildSquares = (rows, columns) => {
  let grid = []
  for (let i = 0; i < rows; i++) {
    grid.push([])
    const rowDiv = document.createElement('div')
    rowDiv.classList.add(`row-${i}`)
    rowDiv.classList.add(`line`)
    fieldSection.appendChild(rowDiv)
    for (let j = 0; j < columns; j++) {
      grid[i].push('')
      const columnDiv = document.createElement('div')
      columnDiv.classList.add(`col-${j}`)
      columnDiv.classList.add(`square`)
      rowDiv.appendChild(columnDiv)
    }
  }
  return grid
}

const spawnPiece = (tetromino) => {
  let grid = field
  for (let i = 0; i < tetromino.length; i++) {
    for (let j = 0; j < tetromino[i].length; j++) {
        grid[i][j+3] = tetromino[i][j]
    }
  }
  return grid
}

const syncSquares = () => {}

const init = () => {
  field = buildSquares(ROW_COUNT, COLUMN_COUNT)
  console.log(fieldSection)
  console.log(field)
  field = spawnPiece(I)
  syncSquares()
}
//listeners

init()
