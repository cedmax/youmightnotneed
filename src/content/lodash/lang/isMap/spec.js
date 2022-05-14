const expected = {
  mapValue: true,
  weakMapValue: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isMap', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
