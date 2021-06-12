const expected = {
  example1: [81, 6],
  example2: [100, 10],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('overArgs', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
