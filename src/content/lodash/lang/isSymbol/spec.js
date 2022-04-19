const expected = {
  symbolValue: true,
  notSymbolValue: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isSymbol', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
