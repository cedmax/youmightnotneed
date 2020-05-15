const expected = 5

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('getSeconds', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
