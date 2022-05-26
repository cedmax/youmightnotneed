const expected = 'hello fred, barney, & pebbles'

const lodash = require('./lodash')
const plain = require('./vanilla')

test('rest', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
