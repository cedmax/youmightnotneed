const expected = new Date(2014, 6, 10, 12, 13)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('roundToNearestMinutes', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
