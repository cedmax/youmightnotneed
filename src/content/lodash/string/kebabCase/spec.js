
const expected = {
  fooSpaceBar: 'foo-bar',
  fooBar: 'foo-bar',
  foo_bar: 'foo-bar',
  varFooBar: 'foo-bar',
  varNull: '',
  varAlllowercase: 'alllowercase',
  varAllcapitalletters: 'allcapitalletters',
  varEmpty: "",
  varFalse: "false",
  varUndefined: "",
  varZero: "0",
  varCamelCase: "camel-case",
  varOneUpperCase: "a",
  varOnelowerCase: "b",
  varNumber: "1",
  varNotAlpha1: "",
  varNotAlpha2: "",
  CustomXMLParser: "custom-xml-parser",
  APIFinder: "api-finder",
  JSONResponseData: "json-response-data",
  Person20Address: "person-20-address",
  UserAPI20Endpoint: "user-api-20-endpoint",
  var20abcDe: "20-abc-de",
  var30fghIJ: "30-fgh-ij",
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('kebabCase', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
