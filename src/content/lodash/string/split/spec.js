const expected = {
  all: ['a', 'b', 'c'],
  justTwo: ['a', 'b'],
}
const lodash = require('./lodash')
const plain = require('./vanilla')

test('split', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
