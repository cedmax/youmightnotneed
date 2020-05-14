const expected = {
  future: true,
  past: false,
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('isFuture', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
