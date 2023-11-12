// jk @ts-check
/**
 * @typedef {[string[]]} Grid
 */
// constants

// some refactor ideas
// instead of scanning the entire grid every single time to get the active tetromino's square locations on the grid, what if array.find was leveraged to find the top-left-most square piece of the tetromino, then:
// - use the value of the found square to find its respective tetromino piece definition
// - the piece definition should tell your collision checker exactly where all the next squares are
// - as soon as collision is found, return
// - if collision check passes, return an updated activePiece grid with the new squares

import { grid } from './grid.js'
const ROW_COUNT = 21
const COLUMN_COUNT = 10
const SHAPE = {
  I: [
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  O: [
    [0, 1],
    [1, 0],
    [1, 1],
  ],
}
const I = [[], ['i', 'i', 'i', 'i']]

//variables
let state
let field
let emptyField
let activePiece

//elements
const bodyEl = document.querySelector('body')
const fieldSection = document.querySelector('#field')

//functions
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

const buildSquares = (grid) => {
  console.log(grid.length)
  for (let i = 0; i < grid.length; i++) {
    const rowDiv = document.createElement('div')
    rowDiv.classList.add(`row-${i}`)
    rowDiv.classList.add(`line`)
    fieldSection.appendChild(rowDiv)
    for (let j = 0; j < grid[i].length; j++) {
      const columnDiv = document.createElement('div')
      columnDiv.classList.add(`col-${j}`)
      columnDiv.classList.add(`square`)
      rowDiv.appendChild(columnDiv)
    }
  }
}

const spawnPiece = (tetromino) => {
  for (let i = 0; i < tetromino.length; i++) {
    for (let j = 0; j < tetromino[i].length; j++) {
      activePiece[i][j + 3] = tetromino[i][j]
    }
  }
}
const syncSquares = () => {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (!field[i][j] && !activePiece[i][j]) {
        fieldSection.children[i].children[j].classList.remove(
          `tetromino-${fieldSection.children[i].children[j].value}`
        )
        fieldSection.children[i].children[j].value = ''
      } else if (field[i][j]) {
        fieldSection.children[i].children[j].value = field[i][j]
        fieldSection.children[i].children[j].classList.add(
          `tetromino-${fieldSection.children[i].children[j].value}`
        )
      } else if (activePiece[i][j]) {
        fieldSection.children[i].children[j].value = activePiece[i][j]
        fieldSection.children[i].children[j].classList.add(
          `tetromino-${fieldSection.children[i].children[j].value}`
        )
      }
    }
  }
}

/**
 *
 * @param {Grid} piece
 * @param {Grid} grid
 * @param {'up | 'down' | 'left' | 'right'} direction
 */
const movePiece = (piece, grid, direction) => {
  // look at activePiece and field grids.
  console.log(piece)
  console.log(grid)
  // calculate where each square will end up (expand on this)
  //
  // check respective grid coordinates to see if there's a collision
  // if yes, ?
  // if no write over the new activePiece values
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      // down
      if (direction === 'down') {
        grid = grid[i + 1][j]
      } else if (direction === 'down' && activePiece[i + 1]) {
        return
      }
    }
  }
  activePiece = grid
}

const runGame = () => {
  if (!activePiece) {
    activePiece = buildGrid(ROW_COUNT, COLUMN_COUNT)
    spawnPiece(I)
  }

  syncSquares()
}

const init = () => {
  state = { ...INIT_STATE }
  emptyField = buildGrid(ROW_COUNT, COLUMN_COUNT)
  field = JSON.parse(JSON.stringify(emptyField))


  // temp squares to trigger a line break after activePiece becomes field
  field[20][0] = 'i'
  field[20][1] = 'i'
  field[20][2] = 'i'
  field[20][7] = 'i'
  field[20][8] = 'i'
  field[20][9] = 'i'

  buildSquares(field)
  state.timer = setInterval(runGame, state.delay)
}
// listeners
bodyEl.addEventListener('keydown', (e) => {
  e.preventDefault()
  {
    if (e.key === 'ArrowDown') {
      movePiece('down')
      console.log(e.key)
    }
    if (e.key === 'ArrowLeft') {
      // movePiece('down')
      console.log(e.key)
    }
    if (e.key === 'ArrowRight') {
      // movePiece('down')
      console.log(e.key)
    }
    if (e.key === 'ArrowUp') {
      // movePiece('down')
      console.log(e.key)
    }
  }
})

init()
