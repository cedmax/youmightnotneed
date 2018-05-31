const expected = {
  simple: { a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] },
  complex: [{
    a: 'testdata',
    b: 555,
    c: {
      ca: 1,
      cb: [
        {
          a: 'test',
          x: 2,
        },
        {
          b: 56,
        },
        {
          c: 1,
        },
      ],
      cc: 1,
    },
  }, {
    a: 1,
    b: 2,
    c: 'def',
  }, {
    a: 'test',
  }],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('merge simple', () => {
  expect(lodash.simple).toEqual(expected.simple)
  expect(plain.simple).toEqual(lodash.simple)
})


test('merge complex', () => {
  expect(lodash.complex).toEqual(expected.complex)
  expect(plain.complex).toEqual(lodash.complex)
})
