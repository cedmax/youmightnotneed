const expected = false

const lodash = require('./lodash')
const plain = require('./vanilla')

test('cloneDeep', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
