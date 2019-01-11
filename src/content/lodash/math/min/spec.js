const expected = {
  min: 2,
  undefined,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('min', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
