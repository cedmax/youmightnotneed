const expected = {
  first: 'hi fred!',
  second: 'hiya fred!',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('bindKey', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
