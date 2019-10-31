const expected = {
  nullVal: true,
  undefVal: true,
  nanVal: false,
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

test('nanVal', () => {
  expect(lodash.nanVal).toEqual(expected.nanVal)
  expect(plain.nanVal).toEqual(lodash.nanVal)
})
