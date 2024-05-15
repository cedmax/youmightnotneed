const expected = {
  enumeration: ['fred', 'barney', 'pebbles'],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('words', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
