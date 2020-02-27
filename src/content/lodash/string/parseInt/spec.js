const expected = {
  simple: 8,
  map: [6, 8, 10],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('parseInt', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
