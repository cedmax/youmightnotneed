const expected = {
  string: 0,
  array: 0,
  default: 'default',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('get', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
