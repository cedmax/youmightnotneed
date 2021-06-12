const fns = {
  lodash: require('./lodash'),
  plain: require('./vanilla'),
}

describe('once', () => {
  Object.entries(fns).forEach(([key, once]) => {
    describe(key, () => {
      let fn

      beforeEach(() => {
        fn = jest.fn(a => a)
      })

      test('it should call the function only once', () => {
        const onlyOnce = once(fn)

        let res
        for (let i = 0; i < 100; i++) {
          res = onlyOnce(i)
        }

        expect(fn).toBeCalledTimes(1)
        expect(fn).toBeCalledWith(0)
        expect(res).toBe(0)
      })
    })
  })
})
