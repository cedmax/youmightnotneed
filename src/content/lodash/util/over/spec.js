const expected = [4, 1]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('over', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
