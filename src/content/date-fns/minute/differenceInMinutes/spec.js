const expected = {
  positive: 12,
  negative: -1,
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('differenceInMinutes', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
