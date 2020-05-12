const expected = {
  before: true,
  equal: false,
  after: false,
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('isBefore', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
