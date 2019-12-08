const expected = { char: '***', string: 'abcabc', zero: '' }

const lodash = require('./lodash')
const plain = require('./vanilla')

test('repeat', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
