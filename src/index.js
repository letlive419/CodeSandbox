// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map(function (x){
//   return x * 2;
// });

//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// })

//Reduce - Accumulate a value by doing something to each item in an array.

// const newNumbers = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

//Find - find the first item that matches from an array.
// const newNumbers = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newNumbers);
//FindIndex - find the index of the first item that matches.

//Finds the index similar to example above.

import emojipedia from "./emojipedia";

const meanings = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});

console.log(meanings);
