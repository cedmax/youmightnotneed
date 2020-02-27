const expected = {
  default: 1,
  falsy: '',
  undefined: 10,
  null: 10,
  nan: 10,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('defaultTo', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
