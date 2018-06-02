const expected = {
  simple: { a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] },
  array: [{ a: 1, b: 1, f: 1 }, { b: 2, c: 5 }, { c: 3, d: 3, e: 3 }, [4, 5, 6, 7]],
  complex: [{
    a: 'testdata',
    b: 555,
    c: {
      ca: 1,
      cb: [{
        a: 'test',
        x: 2,
      }, {
        b: 56,
      }, {
        c: 1,
      }, {
        d: 12,
      }],
      cc: 1,
    },
    d: 1,
  }, {
    a: 1,
    b: 'abc',
    c: 'def',
  }, {
    a: 'test',
  }, {
    c: 2,
  }],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('merge simple', () => {
  expect(lodash.simple).toEqual(expected.simple)
  expect(plain.simple).toEqual(lodash.simple)
})

test('merge array', () => {
  expect(lodash.array).toEqual(expected.array)
  expect(plain.array).toEqual(lodash.array)
})

test('merge complex', () => {
  expect(lodash.complex).toEqual(expected.complex)
  expect(plain.complex).toEqual(lodash.complex)
})
