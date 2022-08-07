

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined) return []
  if (matrix === []) return 'empty array'
  else {

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let columnIdx = i % 2 === 0
        ? j
        : matrix[i].length - j - 1;
        result.push(matrix[i][columnIdx])
      } 
    }
   return result 
  }
  
  
}
