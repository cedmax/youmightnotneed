const expected = 'a~b~c'

const lodash = require('./lodash')
const plain = require('./vanilla')

test('join', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
