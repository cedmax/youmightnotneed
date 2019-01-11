const expected = {
  max: 8,
  undefined,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('max', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
