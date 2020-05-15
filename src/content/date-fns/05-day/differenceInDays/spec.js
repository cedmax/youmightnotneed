const expected = {
  year: 365,
  none: 0,
  nintytwo: 92,
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('differenceInDays', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
