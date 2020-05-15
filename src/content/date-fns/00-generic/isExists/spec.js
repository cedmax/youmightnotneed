const expected = {
  valid: true,
  invalid: false,
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('isExists', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
