const expected = new Date(2030, 0, 1)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('closestTo', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
