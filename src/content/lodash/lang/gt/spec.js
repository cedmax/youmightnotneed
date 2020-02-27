const expected = {
  greaterThan: true,
  equalTo: false,
  lessThan: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('gt', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
