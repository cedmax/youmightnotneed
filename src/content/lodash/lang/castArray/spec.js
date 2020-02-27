const expected = {
  num: [1],
  obj: [{ a: 1 }],
  str: ['abc'],
  null: [null],
  undefined: [undefined],
  empty: [],
  arrayEquality: true,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('castArray', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
