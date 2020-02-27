const expected = {
  composed: 'contact_1',
  simple: '2',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('uniqueId', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
