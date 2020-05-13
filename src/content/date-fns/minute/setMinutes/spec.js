const expected = new Date(2014, 8, 1, 11, 45, 40)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('setMinutes', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
