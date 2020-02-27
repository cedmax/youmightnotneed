const expected = {
  string: true,
  notString: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isString', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
