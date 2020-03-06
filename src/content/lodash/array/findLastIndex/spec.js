const expected = {
  found: 2,
  notFound: -1,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('findLastIndex', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
