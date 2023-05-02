const expected = {
  simple: 'deja vu',
  //prettier-ignore
  complex: ['a','ae','o','oe','u','A','Ae','U','O','Oe','A','A','A','A','A','A','A','A','A','a','a','a','a','a','a','a','a','C','C','C','C','C','c','c','c','c','c','D','D','D','d','d','d','E','E','E','E','E','E','E','E','E','e','e','e','e','e','e','e','e','e','G','G','G','G','g','g','g','g','H','H','h','h','I','I','I','I','I','I','I','I','I','i','i','i','i','i','i','i','i','i','J','j','K','k','k','L','L','L','L','L','L','l','l','l','l','l','N','N','N','N','N','n','n','n','n','n','O','O','O','O','O','O','O','O','o','o','o','o','o','o','o','R','R','R','r','r','r','S','S','S','S','s','s','s','s','s','T','T','T','t','t','t','U','U','U','U','U','U','U','U','U','u','u','u','u','u','u','u','u','u','Y','Y','Y','y','y','y','W','w','Z','Z','Z','z','z','z','Th','th','Ae','ss','IJ','ij'],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('deburr', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
