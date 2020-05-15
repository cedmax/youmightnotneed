const expected = new Date(2015, 1, 1)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('addMonths', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
