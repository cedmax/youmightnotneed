const expected = {
  regex: true,
  notRegex: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isRegExp', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
