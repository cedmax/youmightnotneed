const expected = new Date(2014, 8, 2, 11)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('startOfHour', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
