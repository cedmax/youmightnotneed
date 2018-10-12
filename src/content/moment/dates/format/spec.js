const moment = require('./moment')
const plain = require('./vanilla')

test('format simple', () => {
  expect(plain.simple).toEqual(moment.simple)
})

test('format complex', () => {
  expect(plain.complex).toEqual(moment.complex)
})
