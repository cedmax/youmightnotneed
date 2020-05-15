const expected = {
  randomday: 3,
  sunday: 0,
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('getDay', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
