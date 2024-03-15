exports.spec = (project, method) => {
  const prjToVariable = project.replace(/-(.)/g, '$1')
  return `const expected = null

const ${prjToVariable} = require('./${project}')
const plain = require('./vanilla')

test('${method}', () => {
  expect(${prjToVariable}).toEqual(expected)
  expect(plain).toEqual(${prjToVariable})
})
`
}

exports.lodash = (method, example) => `// https://lodash.com/docs/#${method}
import { ${method} } from 'lodash'

${example || ''}

module.exports = ${method}()
// =>
`

exports['date-fns'] = (
  method,
  example
) => `// https://date-fns.org/v3.5.0/docs/${method}
import { ${method} } from 'date-fns'

${example || ''}
`
