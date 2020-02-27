const expected = {
  simple: 'b',
  negative: 'c',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('nthArg', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
