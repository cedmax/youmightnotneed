const expected = 'fred, barney, &amp; pebbles'

const lodash = require('./lodash')
const plain = require('./vanilla')

test('escape', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
