const expected = {
  string: true,
  null: true,
  nan: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('overSome', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
