const expected = {
  simple: 'abc',
  custom: 'abc',
  map: ['foo', 'bar'],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('trim', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
