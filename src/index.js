
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix === []) { return [] }
  else {
    let mass = [];
    matrix.forEach((el, ind) => {
      if (ind % 2 === 0) {
        el.forEach(value => {
          mass.push(value)
        })
      }
      else {
        el.reverse().forEach(value => {
          mass.push(value)
        })
      }
    })
    return mass
  }
}
