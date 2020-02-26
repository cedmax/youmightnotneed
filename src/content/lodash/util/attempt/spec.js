const expected = {
  success: ['s', 't', 'r', 'i', 'n', 'g'],
  failure: new TypeError('item.split is not a function'),
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('success', () => {
  expect(lodash.success).toEqual(expected.success)
  expect(plain.success).toEqual(lodash.success)
})

test('failure', () => {
  expect(lodash.failure).toEqual(expected.failure)
  expect(plain.failure).toEqual(lodash.failure)
})
