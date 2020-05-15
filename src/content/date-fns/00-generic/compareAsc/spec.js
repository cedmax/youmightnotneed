const expected = {
  compare: -1,
  equal: 0,
  sort: [new Date(1987, 1, 11), new Date(1989, 6, 10), new Date(1995, 6, 2)],
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('compareAsc', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
