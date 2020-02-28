const flowRight = funcs => (...args) =>
  funcs.reverse().reduce((prev, fnc) => [fnc(...prev)], args)[0]

const add = (a, b) => a + b

const square = n => n * n

const addSquare = flowRight([square, add])
module.exports = addSquare(1, 2)
// => 9
