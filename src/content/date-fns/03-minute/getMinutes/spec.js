const expected = 45

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('getMinutes', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
