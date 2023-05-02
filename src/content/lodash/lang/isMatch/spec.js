const expected = {
  match: true,
  noMatch: false,
  matchNested: true,
  noMatchNested: false,
  matchArray: true,
  matchPartialArray: true,
  noMatchArray: false,
  empty: true,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isMatch', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
