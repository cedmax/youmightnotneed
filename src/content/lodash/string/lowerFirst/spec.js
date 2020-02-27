const expected = {
  normal: 'fred',
  allCaps: 'fRED',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('lowerFirst', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
