const expected = { n: 2 }

const lodash = require('./lodash')
const plain = require('./vanilla')

test('maxBy', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
