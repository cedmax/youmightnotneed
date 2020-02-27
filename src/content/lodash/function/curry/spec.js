const expected = {
  curry: [1, 2, 3],
  moreargs: [1, 2, 3],
  allargs: [1, 2, 3],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('curry', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
