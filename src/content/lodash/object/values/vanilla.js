const object = {
  0: {
    a: 1,
    b: 2,
    c: 3,
  },
  1: {
    d: 4,
    e: 5,
    f: 6,
  },
}

module.exports = Object.values(object)
// => [{a: 1, b: 2, c: 3}, {d: 4, e: 5, f: 6}]
