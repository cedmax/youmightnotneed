const expected = {
  default: [2.1],
  property: [{ 'x': 1 }],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('intersectionBy', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
