// module.exports = {
  
// }

// const buildSquares = (grid, element) => {
//   console.log(grid.length)
//   for (let i = 0; i < grid.length; i++) {
//     const rowDiv = document.createElement('div')
//     rowDiv.classList.add(`row-${i}`)
//     rowDiv.classList.add(`line`)
//     element.appendChild(rowDiv)
//     for (let j = 0; j < grid[i].length; j++) {
//       const columnDiv = document.createElement('div')
//       columnDiv.classList.add(`col-${j}`)
//       columnDiv.classList.add(`square`)
//       rowDiv.appendChild(columnDiv)
//     }
//   }
// }

// const spawnPiece = (grid, tetromino) => {
//   for (let i = 0; i < tetromino.length; i++) {
//     for (let j = 0; j < tetromino[i].length; j++) {
//       grid[i][j + 3] = tetromino[i][j]
//     }
//   }
// }

// const syncSquares = (grid, element) => {
//   for (let i = 0; i < field.length; i++) {
//     for (let j = 0; j < field[i].length; j++) {
//       if (!field[i][j] && !grid[i][j]) {
//         element.children[i].children[j].classList.remove(
//           `tetromino-${element.children[i].children[j].value}`
//         )
//         element.children[i].children[j].value = ''
//       } else if (field[i][j]) {
//         element.children[i].children[j].value = field[i][j]
//         element.children[i].children[j].classList.add(
//           `tetromino-${element.children[i].children[j].value}`
//         )
//       } else if (grid[i][j]) {
//         element.children[i].children[j].value = grid[i][j]
//         element.children[i].children[j].classList.add(
//           `tetromino-${element.children[i].children[j].value}`
//         )
//       }
//     }
//   }
// }

// /**
//  *
//  * @param {'down' | 'left' | 'right'} direction
//  */
// const movePiece = (grid, direction) => {
//   let newGrid = JSON.parse(JSON.stringify(grid))
//   console.log(grid)
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (direction === 'down' && !grid[i + 1]) {
//         newGrid[i + 1][j] = grid[i][j]
//       } else if (direction === 'down' && activePiece[i + 1]) {
//         return
//       }
//     }
//   }
//   return (grid = newGrid)
// }
