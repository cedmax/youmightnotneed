const expected = {
  valid: true,
  convertible: true,
  invalid: false,
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('isValid', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
