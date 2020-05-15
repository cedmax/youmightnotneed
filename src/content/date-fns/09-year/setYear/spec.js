const expected = new Date(2013, 8, 1)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('setYear', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
