const expected = {
  weakMapValue: false,
  weakSetValue: true,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isWeakSet', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
