const expected = {
  example1: true,
  example2: true,
  example3: false,
  example4: false,
  example5: true,
  example6: false,
  example7: true,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('inRange', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
