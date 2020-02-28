// the only difference from the curry method
// implementation is how arguments gets concatenated
const curryRight = func => {
  const expectedArgs = func.length
  const curried = (...args) => {
    return args.length >= expectedArgs
      ? func(...args)
      : (...args2) => curried(...args2.concat(args))
  }
  return curried
}

const abc = (a, b, c) => [a, b, c]

const curried = curryRight(abc)

exports.curry = curried(3)(2)(1)
// => [1, 2, 3]

exports.moreargs = curried(2, 3)(1)
// => [1, 2, 3]

exports.allargs = curried(1, 2, 3)
// => [1, 2, 3]
