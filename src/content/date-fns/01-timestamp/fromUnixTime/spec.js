const expected = new Date(2012, 1, 29, 11, 45, 5)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('fromUnixTime', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
