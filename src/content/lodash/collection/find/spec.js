const expected = { user: 'barney', age: 36, active: true }

const lodash = require('./lodash')
const plain = require('./vanilla')

test('find', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
