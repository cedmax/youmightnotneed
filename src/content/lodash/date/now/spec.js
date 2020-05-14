// for testing purposes date is mocked to:
// new Date(2014, 8, 25, 18, 30, 15, 500)
const expected = 1411666215500

const lodash = require('./lodash')
const plain = require('./vanilla')

test('some', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
