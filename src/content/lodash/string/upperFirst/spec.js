const expected = {
  lowerCase: 'Fred',
  upperCase: 'FRED',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('upperFirst', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
