const expected = ['d', 'c', 'b', 'a']

const lodash = require('./lodash')
const plain = require('./vanilla')

test('flip', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
