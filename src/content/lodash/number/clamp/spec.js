const expected = {
  noOptionalArg: -10,
  higher: 5,
  lower: -5,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('clamp', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
