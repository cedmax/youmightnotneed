const expected = {
  setValue: true,
  weakSetValue: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isSet', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
