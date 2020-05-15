const expected = new Date(2014, 6, 11, 1, 0)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('addHours', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
