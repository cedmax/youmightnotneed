const expected = new Date(1987, 1, 11)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('min', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
