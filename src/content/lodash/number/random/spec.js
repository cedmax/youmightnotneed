const lodash = require('./lodash')
const plain = require('./vanilla')

test('random(0, 5)', () => {
  expect(lodash.integer05).toBeGreaterThanOrEqual(0)
  expect(plain.integer05).toBeGreaterThanOrEqual(0)
  expect(lodash.integer05).toBeLessThanOrEqual(5)
  expect(plain.integer05).toBeLessThanOrEqual(5)
  expect([0, 1, 2, 3, 4, 5]).toContain(lodash.integer05)
  expect([0, 1, 2, 3, 4, 5]).toContain(plain.integer05)
})

test('random(5)', () => {
  expect(lodash.integer5).toBeGreaterThanOrEqual(0)
  expect(plain.integer5).toBeGreaterThanOrEqual(0)
  expect(lodash.integer5).toBeLessThanOrEqual(5)
  expect(plain.integer5).toBeLessThanOrEqual(5)
  expect([0, 1, 2, 3, 4, 5]).toContain(lodash.integer5)
  expect([0, 1, 2, 3, 4, 5]).toContain(plain.integer5)
})

test('random(5, true)', () => {
  expect(lodash.floating5).toBeGreaterThanOrEqual(0)
  expect(plain.floating5).toBeGreaterThanOrEqual(0)
  expect(lodash.floating5).toBeLessThanOrEqual(5)
  expect(plain.floating5).toBeLessThanOrEqual(5)
  expect([0, 1, 2, 3, 4, 5]).not.toContain(lodash.floating5)
  expect([0, 1, 2, 3, 4, 5]).not.toContain(plain.floating5)
})

test('random(1.2, 5.2)', () => {
  expect(lodash.floating).toBeGreaterThanOrEqual(1.2)
  expect(plain.floating).toBeGreaterThanOrEqual(1.2)
  expect(lodash.floating).toBeLessThanOrEqual(5.2)
  expect(plain.floating).toBeLessThanOrEqual(5.2)
  expect([0, 1, 2, 3, 4, 5]).not.toContain(lodash.floating)
  expect([0, 1, 2, 3, 4, 5]).not.toContain(plain.floating)
})

test('random()', () => {
  expect([0, 1]).toContain(lodash.integer)
  expect([0, 1]).toContain(plain.integer)
})
