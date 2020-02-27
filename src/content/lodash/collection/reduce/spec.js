const expected = {
  array: 3,
  object: { 1: ['a', 'c'], 2: ['b'] },
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('reduce', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
