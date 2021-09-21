const fns = {
  lodash: require('./lodash'),
  plain: require('./vanilla'),
}

jest.useFakeTimers()

describe('debounce', () => {
  Object.entries(fns).forEach(([key, debounce]) => {
    describe(key, () => {
      let fn
      beforeEach(() => {
        fn = jest.fn()
      })

      test('it should call the debounced fn once at the end of the quiet time', () => {
        const debounced = debounce(fn, 1000)

        for (let i = 0; i < 100; i++) {
          debounced(i)
        }

        jest.advanceTimersByTime(1001)
        expect(fn).toBeCalledTimes(1)
        expect(fn).toBeCalledWith(99)
      })

      test('it should call the debounced fn once at the end of the quiet time', () => {
        const debounced = debounce(fn, 1000)

        for (let i = 0; i < 100; i++) {
          debounced(i)
          jest.advanceTimersByTime(999)
        }

        jest.advanceTimersByTime(1000)
        expect(fn).toBeCalledTimes(1)
        expect(fn).toBeCalledWith(99)
      })

      test("with a leading invocation, it should call the debounced fn once, if the time doens't pass", () => {
        const debounced = debounce(fn, 1000, { leading: true })

        for (let i = 0; i < 100; i++) {
          debounced(i)
        }

        jest.advanceTimersByTime(999)

        expect(fn).toBeCalledTimes(1)
        expect(fn).toBeCalledWith(0)
      })

      test('with a leading invocation, it should call the debounced fn twice (at the beginning and at the end)', () => {
        const debounced = debounce(fn, 1000, { leading: true })

        for (let i = 0; i < 100; i++) {
          debounced(i)
        }

        jest.advanceTimersByTime(1500)

        expect(fn).toBeCalledTimes(2)
        expect(fn).toBeCalledWith(0)
        expect(fn).toBeCalledWith(99)
      })
    })
  })
})
