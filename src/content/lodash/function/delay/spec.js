const fns = {
  lodash: require('./lodash'),
  plain: require('./vanilla'),
}

jest.useFakeTimers()

describe('delay', () => {
  Object.entries(fns).forEach(([key, delay]) => {
    describe(key, () => {
      let fn
      beforeEach(() => {
        fn = jest.fn()
      })

      test("it should not call the delayed function if the time didn't pass", () => {
        delay(fn)
        expect(fn).toBeCalledTimes(0)
      })

      test('it should call the delayed function if the time passed', () => {
        delay(fn)

        jest.advanceTimersByTime(1001)

        expect(fn).toBeCalledTimes(1)
        expect(fn).toBeCalledWith('later')
      })
    })
  })
})
