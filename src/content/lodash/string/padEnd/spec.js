const expected = { defaultPadding: 'abc   ', customPadding: 'abc_-_', noExtraPadding: 'abc' }

const lodash = require('./lodash')
const plain = require('./vanilla')

test('padEnd', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
