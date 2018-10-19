const expected = [4, 5, 2, 3, 0, 1]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('reduceRight', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
