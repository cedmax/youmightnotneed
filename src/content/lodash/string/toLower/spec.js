const expected = {
  dash: '--foo-bar--',
  default: 'foobar',
  underscore: '__foo_bar__',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('toLower', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
