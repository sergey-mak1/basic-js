const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = []
 let arr2;
 const arr = String(n).split('')
 console.log(arr)
for(let i=0;i<arr.length;i++){
arr2 = arr.filter((item,index)=> index!==i)
 console.log(arr2)
  res.push(Number(arr2.join('')));
}
return Math.max(...res)
}
module.exports = {
  deleteDigit
};
