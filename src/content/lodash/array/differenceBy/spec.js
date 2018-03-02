const expected = {
  arrays: [1.2],
  objects: [{ 'x': 2 }]
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('arrays', () => {
  expect(lodash.arrays).toEqual(expected.arrays)
  expect(plain.arrays).toEqual(lodash.arrays)
})

test('objects', () => {
  expect(lodash.objects).toEqual(expected.objects)
  expect(plain.objects).toEqual(lodash.objects)
})
