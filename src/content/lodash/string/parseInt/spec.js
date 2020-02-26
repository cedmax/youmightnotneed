const expected = {
  simple: 8,
  map: [6, 8, 10],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('simple', () => {
  expect(lodash.simple).toEqual(expected.simple)
  expect(plain.simple).toEqual(lodash.simple)
})

test('map', () => {
  expect(lodash.map).toEqual(expected.map)
  expect(plain.map).toEqual(lodash.map)
})
