const expected = {
  default: [2.1, 1.2],
  property: [{ 'x': 1 }, { 'x': 2 }],
  uniqBy: [2.1, 1.2],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('unionBy', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
