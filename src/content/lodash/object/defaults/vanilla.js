const defaults = (...args) =>
  args.reverse().reduce((acc, obj) => ({ ...acc, ...obj }), {})

module.exports = defaults({ a: 1 }, { b: 2 }, { a: 3 })
// // => { 'a': 1, 'b': 2 }
