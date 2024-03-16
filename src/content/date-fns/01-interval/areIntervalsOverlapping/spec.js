const expected = {
  'adjacent': false,
  'inclusive': true,
  'nonOverlapping': false,
  'overlapping': true,
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('areIntervalsOverlapping', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
