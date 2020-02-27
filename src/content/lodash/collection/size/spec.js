const expected = {
  array: 3,
  object: 2,
  string: 7,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('size', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
