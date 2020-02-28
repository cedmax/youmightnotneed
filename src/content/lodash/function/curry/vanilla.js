const curry = func => {
  // define the number of expected arguments
  const expectedArgs = func.length
  const curried = (...args) => {
    // if enough arugments has been passed return the
    // result of the function execution, otherwise
    // continue adding arguments to the list
    return args.length >= expectedArgs
      ? func(...args)
      : (...args2) => curried(...args.concat(args2))
  }
  return curried
}

const abc = (a, b, c) => [a, b, c]

const curried = curry(abc)

exports.curry = curried(1)(2)(3)
// => [1, 2, 3]

exports.moreargs = curried(1, 2)(3)
// => [1, 2, 3]

exports.allargs = curried(1, 2, 3)
// => [1, 2, 3]
