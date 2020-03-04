const expected = {
  simple: 'abc ',
  custom: 'abc-_-',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('trimStart', () => {
  expect(lodash.simple).toEqual(expected.simple)
  expect(plain.simple).toEqual(lodash.simple)
  expect(plain.simpleAlt).toEqual(lodash.simple)
})

test('trimStart – with custom characters', () => {
  expect(lodash.custom).toEqual(expected.custom)
  expect(plain.custom).toEqual(lodash.custom)
})
