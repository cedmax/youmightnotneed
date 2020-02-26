const flowRight = funcs => (...args) =>
  funcs.reverse().reduce((prev, fnc) => [fnc(...prev)], args)[0]

function add(a, b) {
  return a + b
}

function square(n) {
  return n * n
}

const addSquare = flowRight([square, add])
module.exports = addSquare(1, 2)
// => 9
