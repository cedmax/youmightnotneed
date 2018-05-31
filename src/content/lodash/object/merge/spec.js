const lodash = require('./lodash')
const plain = require('./vanilla')

const TEST_DATA = [
  {
    S_NO: 1,
    DESCRIPTION: 'Objects should be deep merged',
    TEST_NAME: 'General Object Deep Merge Test',
    DATA: {
      obj1: {
        key1: {
          subkey1: 1,
          subkey2: {
            subsubkey1: true,
          },
        },
        key2: 'test',
        key3: {
          subkey1: 5,
        },
      },
      obj2: {
        key1: {
          subkey1: 38,
          subkey2: {
            subsubkey1: false,
            subsubkey2: 'abc',
          },
        },
        key3: {
          subkey1: {
            subsubkey1: 'abc',
          },
        },
      },
    },
  },
  {
    S_NO: 2,
    DESCRIPTION: 'When 2 array objects are merged each element of both the arrays are merged and the additional elements in any of the arrays are concatenated in the resulting array',
    TEST_NAME: 'Array Merge Test',
    DATA: {
      obj1: [
        {
          key1: 'testdata',
          key2: 123,
          key3: {
            subkey1: 1,
            subkey2: [{ a: 1 }, { b: 1 }],
          },
        },
        {
          key1: 1,
          key2: 'abc',
        },
        {
          key1: 'test',
        },
      ],
      obj2: [
        {
          key1: 'testdata',
          key2: 123,
          key3: {
            subkey1: 1,
            subkey2: [{ a: 'test', x: 2 }, { b: 56 }, { c: 1 }],
          },
        },
        {
          key3: 2,
          key4: 'def',
        },
      ],
    },
  },
  {
    S_NO: 3,
    DESCRIPTION: '',
    TEST_NAME: 'Non Objects test',
    DATA: {
      obj1: 1,
      obj2: 2,
    },
  },
]

TEST_DATA.forEach(Test => {
  it(`${Test.S_NO}. ${Test.TEST_NAME} - ${Test.DESCRIPTION}`, () => {
    const lodashResult = lodash(Test.DATA.obj1, Test.DATA.obj2)
    const plainResult = plain(Test.DATA.obj1, Test.DATA.obj2)
    expect(lodashResult).toEqual(plainResult)
  })
})
