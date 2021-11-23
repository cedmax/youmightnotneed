const { getParameters } = require('codesandbox/lib/api/define')
const querystring = require('querystring')
const fs = require('fs')
const packages = require('../package.json').dependencies
const endpoint = 'https://codesandbox.io/api/v1/sandboxes/define'

const fixDateFnsForCodeSandbox = body => {
  if (body.match(/const (.+) = require\('date-fns\/\1'\)/g)) {
    const [string, method] = /const (.+) = require\('date-fns\/\1'\)/g.exec(
      body
    )
    return body.replace(string, `const { ${method} } = require('date-fns')`)
  }
  return body
}

module.exports = path => {
  const [, frw, folder, method] = path.match(/src\/content\/(.+)\/(.+)\/(.+)/)
  const query = querystring.escape(
    `previewwindow=tests&file=/${folder}/${method}/vanilla.js`
  )

  const fixFileName = (fileName, method) => {
    const newFilename = fileName.replace(`./src/content/${frw}/`, '')
    return newFilename.replace(`/spec.js`, `/${method}.spec.js`)
  }

  const glob = require('glob')

  const fileList = glob.sync(`./src/content/${frw}/**/${method}/*.js`)
  const files = fileList.reduce(
    (acc, file) => ({
      ...acc,
      [fixFileName(file, method)]: {
        content: fixDateFnsForCodeSandbox(fs.readFileSync(file, 'utf8')),
        isBinary: false,
      },
    }),
    {}
  )

  const parameters = getParameters({
    files: {
      ...files,
      '.prettierrc': {
        content: fs.readFileSync('./.prettierrc', 'utf8'),
      },
      'package.json': {
        content: {
          name: `${frw}/${method}`,
          dependencies: {
            [frw]: packages[frw],
            '@babel/runtime': '7.15.4',
          },
        },
      },
    },
  })

  return `${endpoint}?parameters=${parameters}&query=${query}`
}
