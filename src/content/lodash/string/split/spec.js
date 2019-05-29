const expectedAll = ['a', 'b', 'c']
const expectedJustTwo = ['a', 'b']

const lodash = require('./lodash')
const plain = require('./vanilla')

test('split', () => {
  expect(lodash.all).toEqual(expectedAll)
  expect(plain.all).toEqual(expectedAll)
  expect(lodash.justTwo).toEqual(expectedJustTwo)
  expect(plain.justTwo).toEqual(expectedJustTwo)
})
