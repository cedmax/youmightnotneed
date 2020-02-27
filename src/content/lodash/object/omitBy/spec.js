const expected = { b: '2' }

const lodash = require('./lodash')
const plain = require('./vanilla')

test('omitBy', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
