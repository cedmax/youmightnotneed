const expected = new Date(2014, 7, 22)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('subDays', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
