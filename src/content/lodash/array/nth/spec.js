const expected = {
  simple: 'b',
  negative: 'c',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('simple', () => {
  expect(lodash.simple).toEqual(expected.simple)
  expect(plain.simple).toEqual(lodash.simple)
})

test('negative', () => {
  expect(lodash.negative).toEqual(expected.negative)
  expect(plain.negative).toEqual(lodash.negative)
})
