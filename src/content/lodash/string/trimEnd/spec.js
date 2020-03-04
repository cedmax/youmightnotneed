const expected = {
  simple: ' abc',
  custom: '-_-abc',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('trimEnd', () => {
  expect(lodash.simple).toEqual(expected.simple)
  expect(plain.simple).toEqual(lodash.simple)
  expect(plain.simpleAlt).toEqual(lodash.simple)
})

test('trimEnd – with custom characters', () => {
  expect(lodash.custom).toEqual(expected.custom)
  expect(plain.custom).toEqual(lodash.custom)
})
