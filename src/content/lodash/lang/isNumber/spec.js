const expected = {
  number: true,
  minValue: true,
  infinity: true,
  string: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isNumber', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
