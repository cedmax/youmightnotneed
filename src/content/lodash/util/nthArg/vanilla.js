const nthArg =
  idx =>
  (...args) =>
    args.slice(idx, idx + 1)[0]

let func = nthArg(1)
exports.simple = func('a', 'b', 'c', 'd')
// => 'b'

func = nthArg(-2)
exports.negative = func('a', 'b', 'c', 'd')
// => 'c'
