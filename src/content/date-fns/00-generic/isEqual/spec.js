const expected = {
  equal: true,
  notEqual: false,
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('isEqual', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
