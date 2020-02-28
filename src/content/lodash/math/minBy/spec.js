const expected = { n: 1 }

const lodash = require('./lodash')
const plain = require('./vanilla')

test('sumBy', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
