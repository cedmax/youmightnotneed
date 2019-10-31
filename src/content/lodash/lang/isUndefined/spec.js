const expected = {
  nullVal: false,
  undefVal: true,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('nullVal', () => {
  expect(lodash.nullVal).toEqual(expected.nullVal)
  expect(plain.nullVal).toEqual(lodash.nullVal)
})

test('undefVal', () => {
  expect(lodash.undefVal).toEqual(expected.undefVal)
  expect(plain.undefVal).toEqual(lodash.undefVal)
})
