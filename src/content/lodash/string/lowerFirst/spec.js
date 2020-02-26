const expected = {
  normal: 'fred',
  allCaps: 'fRED',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('normal', () => {
  expect(lodash.normal).toEqual(expected.normal)
  expect(plain.normal).toEqual(lodash.normal)
})

test('allCaps', () => {
  expect(lodash.allCaps).toEqual(expected.allCaps)
  expect(plain.allCaps).toEqual(lodash.allCaps)
})
