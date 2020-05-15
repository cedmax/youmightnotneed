const expected = 1330515905

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('getUnixTime', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
