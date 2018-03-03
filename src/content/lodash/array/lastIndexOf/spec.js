const expected = {
  simple: 3,
  fromIndex: 1,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('findIndex', () => {
  expect(lodash.simple).toEqual(expected.simple)
  expect(plain.simple).toEqual(lodash.simple)
})

test('fromIndex', () => {
  expect(lodash.fromIndex).toEqual(expected.fromIndex)
  expect(plain.fromIndex).toEqual(lodash.fromIndex)
})
