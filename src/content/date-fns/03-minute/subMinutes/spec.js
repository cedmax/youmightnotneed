const expected = new Date(2014, 6, 10, 11, 30)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('subMinutes', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
