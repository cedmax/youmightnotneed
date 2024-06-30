/**
 * @jest-environment ./src/content/lodash/lang/cloneDeep/jest.fix.js
 */

const expected = false

const lodash = require('./lodash')
const plain = require('./vanilla')

test('cloneDeep', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
