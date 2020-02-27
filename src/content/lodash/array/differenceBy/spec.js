const expected = {
  arrays: [1.2],
  objects: [{ x: 2 }],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('differenceBy', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
