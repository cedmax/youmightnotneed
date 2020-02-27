const expected = {
  simple: 3,
  fromIndex: 1,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('lastIndexOf', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
