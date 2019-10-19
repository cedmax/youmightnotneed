const expected = {
  simplePath: 2,
  complexPath: 3,
  simpleDefault: 'default',
  complexDefault: 'default',
  falseCase: undefined,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('get - simple path string', () => {
  expect(lodash.simplePath).toEqual(expected.simplePath)
  expect(plain.simplePath).toEqual(lodash.simplePath)
})

test('get - complex path string', () => {
  expect(lodash.complexPath).toEqual(expected.complexPath)
  expect(plain.complexPath).toEqual(lodash.complexPath)
})
test('get - complex path array', () => {
  expect(lodash.complexPathArray).toEqual(expected.complexPath)
  expect(plain.complexPathArray).toEqual(lodash.complexPathArray)
})

test('get - simple default value if not path not found', () => {
  expect(lodash.simpleDefault).toEqual(expected.simpleDefault)
  expect(plain.simpleDefault).toEqual(lodash.simpleDefault)
})

test('get - complex default value if not path not found', () => {
  expect(lodash.complexDefault).toEqual(expected.complexDefault)
  expect(plain.complexDefault).toEqual(lodash.complexDefault)
})
test('get - should return undefined', () => {
  expect(lodash.falseCase).toEqual(expected.falseCase)
  expect(plain.falseCase).toEqual(lodash.falseCase)
})
