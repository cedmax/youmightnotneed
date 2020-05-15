const expected = new Date(2014, 8, 11)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('addDays', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
