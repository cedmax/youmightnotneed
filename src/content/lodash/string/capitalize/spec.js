const expected = 'Fred'

const lodash = require('./lodash')
const plain = require('./vanilla')

test('capitalize', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
