const expected = {
  success: ['s', 't', 'r', 'i', 'n', 'g'],
  failure: new TypeError('item.split is not a function'),
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('attempt', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
