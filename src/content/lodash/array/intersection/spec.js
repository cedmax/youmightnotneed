const expected = [2]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('intersection', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
