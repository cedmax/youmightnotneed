const expected = 7

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('getISODay', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
