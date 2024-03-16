const expected = { 'in': true, 'out': false, 'start': true, 'end': true }

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('isWithinInterval', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
