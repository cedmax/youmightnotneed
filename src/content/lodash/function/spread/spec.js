const expected = {
  basic: 'fred says hello',
  promise: 76,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

describe('spread', () => {
  test('basic', () => {
    expect(lodash.basic).toEqual(expected.basic)
    expect(plain.basic).toEqual(lodash.basic)
  })

  test('promise', async () => {
    const lodashRes = await lodash.promise
    const plainRes = await plain.promise

    expect(lodashRes).toEqual(expected.promise)
    expect(plainRes).toEqual(lodashRes)
  })
})
