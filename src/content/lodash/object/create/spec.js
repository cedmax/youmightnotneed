const expected = true

const lodash = require('./lodash')
const plain = require('./vanilla')

test('instance of cirlce', () => {
  expect(lodash.circle).toEqual(expected)
  expect(plain.circle).toEqual(lodash.circle)
})

test('instance of shape', () => {
  expect(lodash.shape).toEqual(expected)
  expect(plain.shape).toEqual(lodash.shape)
})
