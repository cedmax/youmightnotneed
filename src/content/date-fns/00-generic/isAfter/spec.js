const expected = {
  before: false,
  equal: false,
  after: true,
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('isAfter', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
