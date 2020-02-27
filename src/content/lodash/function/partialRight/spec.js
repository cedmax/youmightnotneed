const expected = {
  default: 'hi fred',
  placeholder: 'hello fred',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('partialRight', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
