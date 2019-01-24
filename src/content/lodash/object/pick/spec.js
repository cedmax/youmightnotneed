const expected = {
  a: 1,
  c: 3,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('values', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
