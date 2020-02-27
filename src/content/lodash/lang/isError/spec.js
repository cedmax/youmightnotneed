const expected = {
  error: true,
  notError: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isError', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
