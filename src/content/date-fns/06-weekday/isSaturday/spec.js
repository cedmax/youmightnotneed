const expected = true

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('isSaturday', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
