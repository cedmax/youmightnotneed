const expected = {
  instance: ['a', 'b'],
  string: ['0', '1'],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('instance', () => {
  // sorting as the iteration order is not guaranteed
  expect(lodash.instance.sort()).toEqual(expected.instance)
  expect(plain.instance.sort()).toEqual(lodash.instance)
})

test('string', () => {
  expect(lodash.string).toEqual(expected.string)
  expect(plain.string).toEqual(lodash.string)
})
