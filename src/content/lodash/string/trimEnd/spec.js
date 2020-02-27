const expected = {
  simple: ' abc',
  custom: '-_-abc',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('trimEnd', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
