const expected = new Date(2014, 6, 10, 12, 44, 30)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('subSeconds', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
