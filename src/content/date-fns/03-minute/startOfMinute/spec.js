const expected = new Date(2014, 11, 1, 22, 15)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('startOfMinute', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
