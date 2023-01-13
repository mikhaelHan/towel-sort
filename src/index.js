const towelSort = (matrix) => {
  if (matrix === undefined || matrix === []) { return [] }
  else {
    let mass = [];
    matrix.forEach((el, ind) => {
      ind % 2 === 0 ? el.forEach(val => mass.push(val)) : el.reverse().forEach(val => mass.push(val));
    });
    return mass
  }
}

module.exports = towelSort;