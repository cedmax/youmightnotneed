const expected = new Date(2014, 8, 1, 11, 30, 45)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('setSeconds', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
