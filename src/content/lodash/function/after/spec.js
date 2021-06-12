const fns = {
  lodash: require('./lodash'),
  plain: require('./vanilla'),
}

describe('after', () => {
  Object.entries(fns).forEach(([key, method]) => {
    describe(key, () => {
      let fn
      beforeEach(() => {
        fn = jest.fn(a => a)
      })

      test('it should call the fn only from the nth invocation and subsequents', () => {
        const befored = method(5, fn)

        for (let i = 0; i < 100; i++) {
          befored(i)
        }
        expect(fn).toBeCalledTimes(96)
      })
    })
  })
})
