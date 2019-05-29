const expected = {
  simple: [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']],
  chunkSizeZero: [],
  chunkSizeNegative: [],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('simple', () => {
  expect(lodash.simple).toEqual(expected.simple)
  expect(plain.simple).toEqual(lodash.simple)
})

test('chunkSizeZero', () => {
  expect(lodash.chunkSizeZero).toEqual(expected.chunkSizeZero)
  expect(plain.chunkSizeZero).toEqual(lodash.chunkSizeZero)
})

test('chunkSizeNegative', () => {
  expect(lodash.chunkSizeNegative).toEqual(expected.chunkSizeNegative)
  expect(plain.chunkSizeNegative).toEqual(lodash.chunkSizeNegative)
})
