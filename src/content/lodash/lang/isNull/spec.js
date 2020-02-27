const expected = {
  nullVal: true,
  undefVal: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isNull', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
