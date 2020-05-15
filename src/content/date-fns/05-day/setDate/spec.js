const expected = new Date(2014, 8, 30)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('setDate', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
