const flow =
  funcs =>
  (...args) =>
    funcs.reduce((prev, fnc) => [fnc(...prev)], args)[0]

const add = (a, b) => a + b

const square = n => n * n

const addSquare = flow([add, square])
module.exports = addSquare(1, 2)
// => 9
