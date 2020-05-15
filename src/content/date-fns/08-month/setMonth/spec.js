const expected = new Date(2014, 1, 1)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('setMonth', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
