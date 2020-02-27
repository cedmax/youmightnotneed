const expected = {
  string: true,
  null: false,
  nan: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('overEvery', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
