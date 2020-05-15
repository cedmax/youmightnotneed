const expected = 2014

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('getYear', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
