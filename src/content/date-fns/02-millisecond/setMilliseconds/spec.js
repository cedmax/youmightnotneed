const expected = new Date(2014, 8, 1, 11, 30, 40, 300)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('setMilliseconds', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
