const expected = 'hi fred!'

const lodash = require('./lodash')
const plain = require('./vanilla')

test('bind', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
