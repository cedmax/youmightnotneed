const expected = {
  greaterThan: true,
  equalTo: true,
  lessThan: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('gte', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
