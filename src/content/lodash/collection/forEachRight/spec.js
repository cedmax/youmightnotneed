describe('forEach', () => {
  describe('lodash', () => {
    const logCache = console.log

    beforeAll(() => {
      console.log = jest.fn()
      require('./lodash')
    })
    afterAll(() => {
      console.log = logCache
    })

    test('log has been called correctly', () => {
      expect(console.log).toHaveBeenNthCalledWith(1, 'c', 2)
      expect(console.log).toHaveBeenNthCalledWith(2, 'b', 1)
      expect(console.log).toHaveBeenNthCalledWith(3, 'a', 0)
    })
  })

  describe('vanilla', () => {
    const logCache = console.log

    beforeAll(() => {
      console.log = jest.fn()
      require('./vanilla')
    })
    afterAll(() => {
      console.log = logCache
    })

    test('log has been called correctly', () => {
      expect(console.log).toHaveBeenNthCalledWith(1, 'c', 2)
      expect(console.log).toHaveBeenNthCalledWith(2, 'b', 1)
      expect(console.log).toHaveBeenNthCalledWith(3, 'a', 0)
    })
  })
})
