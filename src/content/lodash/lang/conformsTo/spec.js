const expected = {
  scenario1: true,
  scenario2: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('conformsTo', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
