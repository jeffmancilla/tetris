// /*-----------------------------------------------------------------
// Challenge: 08-removeEnds
// Difficulty: Basic
// Prompt:
// - Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
// - If the length of the string argument is less than 3, return an empty string.
// Examples:
// removeEnds('SEI Rocks!'); //=> "EI Rocks"
// removeEnds('a'); //=> "" (empty string)
// -----------------------------------------------------------------*/
// // Your solution for 08-removeEnds here:

// const removeEnds = (string) => (string.length < 3 ? '' : string.slice(1, -1))

// // console.log(removeEnds('SEI Rocks!')); //=> "EI Rocks"
// // console.log(removeEnds('a')); //=> "" (empty string)

// function sumOfArray(arr, sum = 0) {
//   // This function returns the sum of all of the numbers in a given array.
//   // check for strings
//   // base case
//   if (!arr.length) {
//     return sum
//   }
//   sum += arr.shift()
//   return sumOfArray(arr, sum)
// }

// console.log(sumOfArray([1, 2, 3, 4]))

// function findMax(arr, max = 0) {
//   // This function returns the largest number in a given array.
//   if (!arr.length) {
//     return max
//   }
//   if (arr[0] > max) {
//     max = arr.shift()
//   } else {
//     arr.shift()
//   }
//   return findMax(arr, max)
// }
// console.log(findMax(1, 4, 5, 2, 5))

// const findMaxx = (arr, max=0) => !arr.length ? max : findMaxx(max
