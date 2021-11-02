const expected = {
  simplePath: 2,
  complexPath: 3,
  complexPathArray: 3,
  simpleDefault: 'default',
  complexDefault: 'default',
  falseCase: undefined,
  nullCase: null,
  zeroCase: 0,
  undefinedCase: 'default',
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('get', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
