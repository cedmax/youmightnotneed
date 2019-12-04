const expected = {
  simple: [0, 1, 2],
  withIteratee: [3, 4, 5],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('simple', () => {
  expect(lodash.simple).toEqual(expected.simple)
  expect(plain.simple).toEqual(lodash.simple)
})

test('withIteratee', () => {
  expect(lodash.withNumber).toEqual(expected.withNumber)
  expect(plain.withNumber).toEqual(lodash.withNumber)
})
