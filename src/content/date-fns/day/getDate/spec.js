const expected = 29

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('getDate', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
