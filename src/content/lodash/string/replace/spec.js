const expected = 'Hi Barney'

const lodash = require('./lodash')
const plain = require('./vanilla')

test('replace', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
