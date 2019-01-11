const expected = {
  function: { n: 1 },
  shortHand: { n: 1 },
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('sumBy', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
