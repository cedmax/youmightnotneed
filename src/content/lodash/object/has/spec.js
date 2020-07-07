const expected = {
  simple: true,
  nested: true,
  array: true,
  missing: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('has', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
