const expected = {
  array: true,
  dom_body_children: false,
  string: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isArray', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
