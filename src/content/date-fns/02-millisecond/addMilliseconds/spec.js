const expected = new Date(2014, 6, 10, 12, 45, 30, 750)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('addMilliseconds', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
