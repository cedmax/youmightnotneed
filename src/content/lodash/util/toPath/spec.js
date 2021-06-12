const expected = {
  example1: ['a', 'b', 'c'],
  example2: ['a', '0', 'b', 'c'],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('toPath', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
