const expected = new Date(2014, 8, 1)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('subMonths', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
