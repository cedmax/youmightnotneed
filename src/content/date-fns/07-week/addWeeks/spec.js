const expected = new Date(2014, 8, 29)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('addWeeks', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
