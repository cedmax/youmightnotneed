const expected = new Date(2014, 6, 10, 12, 30)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('addMinutes', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
