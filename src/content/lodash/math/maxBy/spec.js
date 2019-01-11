const expected = {
  function: { n: 2 },
  shortHand: { n: 2 },
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('maxBy', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
