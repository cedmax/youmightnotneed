const expected = {
  return: ['b', 'd'],
  array: ['a', 'c'],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('pullAt', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
