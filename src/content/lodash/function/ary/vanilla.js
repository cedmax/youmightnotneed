const ary = (fn, arity) => (...args) => fn(...args.slice(0, arity))

module.exports = ['6', '8', '10'].map(ary(Number.parseInt, 1))
// => [6, 8, 10]
