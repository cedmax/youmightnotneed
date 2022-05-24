const expected = {
  matchesA: 'matches A',
  matchesB: 'matches B',
  noMatch: 'no match',
  fiveMinusZero: 5,
  twoMinusOneByTwo: 0,
  twoMinusTwo: 0,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('cond', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
