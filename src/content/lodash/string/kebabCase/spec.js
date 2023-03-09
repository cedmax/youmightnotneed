const expected = {
  first: 'foo-bar',
  second: 'foo-bar',
  third: 'foo-bar',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('kebabCase', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
