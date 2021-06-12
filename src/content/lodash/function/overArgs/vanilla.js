const overArgs =
  (fn, ops) =>
  (...args) => {
    const mappedArgs = args.map((arg, i) => (ops[i] ? ops[i](arg) : arg))
    return fn(...mappedArgs)
  }

function doubled(n) {
  return n * 2
}

function square(n) {
  return n * n
}

const func = overArgs(
  function (x, y) {
    return [x, y]
  },
  [square, doubled]
)

exports.example1 = func(9, 3)
// => [81, 6]

exports.example2 = func(10, 5)
// => [100, 10]
