const expected = new Date(2014, 8, 1, 4, 30)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('setHours', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
