const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = 0
  let result = [].concat.apply([],matrix);
console.log(result)
result.forEach(element => {
  if(element==='^^'){
    cats++
  }
  });
  return cats
}

module.exports = {
countCats
};
