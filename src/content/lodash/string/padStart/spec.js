const expected = {
  defaultPadding: '   abc',
  customPadding: '_-_abc',
  noExtraPadding: 'abc',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('padStart', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
