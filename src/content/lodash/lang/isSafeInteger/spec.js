const expected = {
  number: true,
  minValue: false,
  infinity: false,
  string: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isSafeInteger', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
