const expected = new Date(2014, 11, 1, 22, 15, 45, 999)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('endOfSecond', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
