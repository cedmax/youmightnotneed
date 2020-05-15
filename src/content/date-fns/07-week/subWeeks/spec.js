const expected = new Date(2014, 7, 4)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('subWeeks', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
