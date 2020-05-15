const expected = 123

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('getMilliseconds', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
