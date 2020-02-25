const expected = {
  composed: 'contact_1',
  simple: '2',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('simple', () => {
  expect(lodash.simple).toEqual(expected.simple)
  expect(plain.simple).toEqual(lodash.simple)
})

test('composed', () => {
  expect(lodash.composed).toEqual(expected.composed)
  expect(plain.composed).toEqual(lodash.composed)
})
