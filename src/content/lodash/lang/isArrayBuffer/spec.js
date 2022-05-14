const expected = {
  arrayBuffer: true,
  array: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isArrayBuffer', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
