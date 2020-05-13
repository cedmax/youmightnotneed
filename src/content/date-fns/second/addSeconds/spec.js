const expected = new Date(2014, 6, 10, 12, 45, 30)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('addSeconds', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
