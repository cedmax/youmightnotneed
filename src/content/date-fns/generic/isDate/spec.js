const expected = {
  valid: true,
  invalid: true,
  string: false,
  object: false,
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('isDate', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
