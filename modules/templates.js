exports.spec = method => `const expected = null

const lodash = require('./lodash')
const plain = require('./vanilla')

test('${method}', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
`

exports.lodash = method => `import { ${method} } from 'lodash'

module.exports = ${method}()
// => 
`
