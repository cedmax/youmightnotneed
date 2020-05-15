const lodash = require('./lodash')
const plain = require('./vanilla')

test('some', () => {
  // eslint-disable-next-line no-restricted-globals
  expect(isNaN(new Date(plain))).toEqual(false)
  expect(new Date(plain).getTime()).toEqual(plain)
  expect(plain - lodash).toEqual(0)
})
