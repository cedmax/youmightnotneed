const expected = {
  true: true,
  false: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isDate', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
