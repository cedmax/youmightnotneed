const expected = {
  default: 'hello fred',
  placeholder: 'hi fred',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('partial', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
