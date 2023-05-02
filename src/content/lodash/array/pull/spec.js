const expected = ['b', 'b']

const lodash = require('./lodash')
const plain = require('./vanilla')

test('pull', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
