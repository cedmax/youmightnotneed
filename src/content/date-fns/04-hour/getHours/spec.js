const expected = 11

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('getHours', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
