const expected = 1

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('closestIndexTo', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
