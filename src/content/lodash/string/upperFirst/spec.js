const expected = {
  lowerCase: 'Fred',
  upperCase: 'FRED',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('lowerCase', () => {
  expect(lodash.lowerCase).toEqual(expected.lowerCase)
  expect(plain.lowerCase).toEqual(lodash.lowerCase)
})

test('upperCase', () => {
  expect(lodash.upperCase).toEqual(expected.upperCase)
  expect(plain.upperCase).toEqual(lodash.upperCase)
})
