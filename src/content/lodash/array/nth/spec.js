const expected = {
  simple: 'b',
  negative: 'c',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('nth', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
