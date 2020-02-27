const expected = { '1': 'c', '2': 'b' }

const lodash = require('./lodash')
const plain = require('./vanilla')

test('invert', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
