const expected = {
  fooSpaceBar: 'foo-bar',
  fooBar: 'foo-bar',
  foo_bar: 'foo-bar',
  null: '',
  UPPERCASE: 'uppercase',
  false: 'false',
  undefined: '',
  number: '0',
  camelCase: 'camel-case',
  nonAlphaChar: '',
  CustomXMLParser: 'custom-xml-parser',
  APIFinder: 'api-finder',
  UserAPI20Endpoint: 'user-api-20-endpoint',
  var30fghIJ: '30-fgh-ij',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('kebabCase', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
