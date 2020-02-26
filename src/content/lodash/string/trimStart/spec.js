const expected = {
  simple: 'abc ',
  custom: 'abc-_-',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('trimStart', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
