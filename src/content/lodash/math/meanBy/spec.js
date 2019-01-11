const expected = {
  function: 5,
  shortHand: 5,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('meanBy', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
