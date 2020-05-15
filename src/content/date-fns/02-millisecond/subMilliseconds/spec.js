const expected = new Date(2014, 6, 10, 12, 45, 29, 250)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('subMilliseconds', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
