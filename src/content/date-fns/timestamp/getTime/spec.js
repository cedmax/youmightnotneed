const expected = 1330515905123

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('getTime', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
