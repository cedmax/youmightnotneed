const expected = new Date(1995, 6, 2)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('max', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
