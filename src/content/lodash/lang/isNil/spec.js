const expected = {
  nullVal: true,
  undefVal: true,
  nanVal: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isNil', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
