const fc = require('fast-check')
const { random } = require('./vanilla')

describe('vanilla properties', () => {
  it('always returns an integer between 0 and given argument with single argument', () => {
    fc.assert(
      fc.property(fc.integer(), a => {
        const result = random(a)
        expect(result).toBeLessThanOrEqual(Math.max(a, 0))
        expect(result).toBeGreaterThanOrEqual(Math.min(a, 0))
        return Number.isInteger(result)
      })
    )
  })

  it('always returns an integer between first and second arguments with two arguments', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        const result = random(a, b)
        expect(result).toBeLessThanOrEqual(Math.max(a, b))
        expect(result).toBeGreaterThanOrEqual(Math.min(a, b))
        return Number.isInteger(result)
      })
    )
  })

  it('always returns an number between first and second arguments with float enabled', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        const result = random(a, b, true)
        expect(result).toBeLessThanOrEqual(Math.max(a, b))
        expect(result).toBeGreaterThanOrEqual(Math.min(a, b))
      })
    )
  })
})
