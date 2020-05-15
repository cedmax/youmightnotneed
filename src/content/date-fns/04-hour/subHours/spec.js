const expected = new Date(2014, 6, 10, 23, 0)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('subHours', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
