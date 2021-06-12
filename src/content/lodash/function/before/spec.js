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
        const befored = method(3, fn)

        let res
        for (let i = 0; i < 100; i++) {
          res = befored(i)
        }
        expect(fn).toBeCalledTimes(2)
        expect(res).toBe(1)
      })
    })
  })
})
