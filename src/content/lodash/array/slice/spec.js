const expected = {
  array: [3, 4],
  undefined: [undefined, undefined, undefined, undefined],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

describe('slice', () => {
  test('normal behaviour', () => {
    expect(lodash.array).toEqual(expected.array)
    expect(plain.array).toEqual(lodash.array)
  })

  test('empty array are dense', () => {
    const denseExpected = expected.undefined.map(v => typeof v)
    const denseLodash = lodash.undefined.map(v => typeof v)
    const densePlain = plain.undefined.map(v => typeof v)

    expect(denseLodash).toEqual(denseExpected)
    expect(densePlain).toEqual(denseLodash)
  })
})
