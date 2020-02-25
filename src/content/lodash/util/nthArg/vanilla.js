const nthArg = idx => (...args) => args[idx >= 0 ? idx : args.length + idx]

let func = nthArg(1)
exports.simple = func('a', 'b', 'c', 'd')
// => 'b'

func = nthArg(-2)
exports.negative = func('a', 'b', 'c', 'd')
// => 'c'
