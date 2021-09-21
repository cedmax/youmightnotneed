const expected = {
  example1: '--FOO-BAR--',
  example2: 'FOOBAR',
  example3: '__FOO_BAR__',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('toUpper', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
