const expected = {
  circle: true,
  shape: true,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('create', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
