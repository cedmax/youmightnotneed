const expected = {
  defaultPadding: '  abc   ',
  customPadding: '_-abc_-_',
  noExtraPadding: 'abc',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('pad', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
