const expected = 'hello fred'

const lodash = require('./lodash')
const plain = require('./vanilla')

test('partial', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
