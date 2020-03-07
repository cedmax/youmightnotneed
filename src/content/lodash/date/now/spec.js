const lodash = require('./lodash')
const plain = require('./vanilla')

test('some', () => {
  const time = plain()
  // eslint-disable-next-line no-restricted-globals
  expect(isNaN(new Date(time))).toEqual(false)
  expect(new Date(time).getTime()).toEqual(time)
  expect(plain() - lodash()).toEqual(0)
})
