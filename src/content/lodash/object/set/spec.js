const expected = {
  string: 4,
  array: 5,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('set', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
