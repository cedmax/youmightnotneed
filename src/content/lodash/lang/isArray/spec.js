const expected = {
  array: true,
  dom_body_children: false,
  string: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('array', () => {
  expect(lodash.array).toEqual(expected.array)
  expect(plain.array).toEqual(lodash.array)
})

test('dom_body_children', () => {
  expect(lodash.dom_body_children).toEqual(expected.dom_body_children)
  expect(plain.dom_body_children).toEqual(lodash.dom_body_children)
})

test('string', () => {
  expect(lodash.string).toEqual(expected.string)
  expect(plain.string).toEqual(lodash.string)
})
