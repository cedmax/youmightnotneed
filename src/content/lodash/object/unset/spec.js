const expected = { a: [{ bar: { d: 6 } }] }

const lodash = require('./lodash')
const plain = require('./vanilla')

test('unset', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
