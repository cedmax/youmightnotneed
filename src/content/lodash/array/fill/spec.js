const expected = {
  array: ['a', 'a', 'a'],
  arrayConstructor: [2, 2, 2],
  partial: [4, '*', '*', 10],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('fill', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
