const expected = {
  dash: '--foo-bar--',
  default: 'foobar',
  underscore: '__foo_bar__',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('dash', () => {
  expect(lodash.dash).toEqual(expected.dash)
  expect(plain.dash).toEqual(lodash.dash)
})

test('default', () => {
  expect(lodash.default).toEqual(expected.default)
  expect(plain.default).toEqual(lodash.default)
})

test('underscore', () => {
  expect(lodash.underscore).toEqual(expected.underscore)
  expect(plain.underscore).toEqual(lodash.underscore)
})
