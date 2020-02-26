const flow = funcs => (...args) => funcs.reduce((prev, fnc) => [fnc(...prev)], args)[0]

function add(a, b) {
  return a + b
}

function square(n) {
  return n * n
}

const addSquare = flow([add, square])
module.exports = addSquare(1, 2)
// => 9
