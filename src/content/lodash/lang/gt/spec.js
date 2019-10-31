const expected = {
  greaterThan: true,
  equalTo: false,
  lessThan: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('greaterThan', () => {
  expect(lodash.greaterThan).toEqual(expected.greaterThan)
  expect(plain.greaterThan).toEqual(lodash.greaterThan)
})

test('equalTo', () => {
  expect(lodash.equalTo).toEqual(expected.equalTo)
  expect(plain.equalTo).toEqual(lodash.equalTo)
})

test('lessThan', () => {
  expect(lodash.lessThan).toEqual(expected.lessThan)
  expect(plain.lessThan).toEqual(lodash.lessThan)
})
