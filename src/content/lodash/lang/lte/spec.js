const expected = {
  default: true,
  equal: true,
  flase: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('lt', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
