const expected = {
  nullVal: false,
  undefVal: true,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isUndefined', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
