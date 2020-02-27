const expected = {
  simplePath: 2,
  complexPath: 3,
  simpleDefault: 'default',
  complexDefault: 'default',
  falseCase: undefined,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('get', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
