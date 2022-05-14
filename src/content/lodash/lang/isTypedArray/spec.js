const expected = {
  uint8Array: true,
  float64Array: true,
  arrayBuffer: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isTypedArray', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
