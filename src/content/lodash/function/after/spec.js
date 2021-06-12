const fns = {
  lodash: require('./lodash'),
  plain: require('./vanilla'),
}

describe('before', () => {
  Object.entries(fns).forEach(([key, method]) => {
    describe(key, () => {
      let fn
      beforeEach(() => {
        fn = jest.fn(a => a)
      })

      test('it should call the fn only the first n-1 times and then return the result of the last operation', () => {
        const befored = method(5, fn)

        for (let i = 0; i < 100; i++) {
          befored(i)
        }
        expect(fn).toBeCalledTimes(96)
      })
    })
  })
})
