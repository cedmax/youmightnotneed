const expected = {
  func: true,
  arrowFunc: true,
  class: true,
  reg: false,
  eval: true,
  new: true,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isFunction', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
