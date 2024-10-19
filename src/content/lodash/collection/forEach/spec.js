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
      expect(console.log).toHaveBeenNthCalledWith(1, 'a', 0)
      expect(console.log).toHaveBeenNthCalledWith(2, 'b', 1)
      expect(console.log).toHaveBeenNthCalledWith(3, 'c', 2)
      expect(console.log).toHaveBeenNthCalledWith(4, 'red', 'a')
      expect(console.log).toHaveBeenNthCalledWith(5, 'green', 'b')
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
      expect(console.log).toHaveBeenNthCalledWith(1, 'a', 0)
      expect(console.log).toHaveBeenNthCalledWith(2, 'b', 1)
      expect(console.log).toHaveBeenNthCalledWith(3, 'c', 2)
      expect(console.log).toHaveBeenNthCalledWith(4, 'red', 'a')
      expect(console.log).toHaveBeenNthCalledWith(5, 'green', 'b')
    })
  })
})
