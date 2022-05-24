const createCodeSandbox = require('./create-code-sandbox')
const fs = require('fs')
const axios = require('axios')
const prettier = require('prettier')

const readFolderList = path =>
  fs
    .readdirSync(path, { withFileTypes: true })
    .filter(item => item.isDirectory())
    .map(({ name }) => name)

const getNestedFolders = (path, level) => {
  const list = readFolderList(path)
  if (level > 0) {
    return list
      .map(item => getNestedFolders(`${path}/${item}`, level - 1))
      .flat()
  } else {
    return list.map(item => `${path}/${item}`)
  }
}

;(async () => {
  const currentRefs = require('../src/code-sandbox-refs.json')
  const currentUrls = require('../src/code-sandbox.json')
  const contentFolder = 'src/content'
  const folders = process.argv[2]
    ? process.argv
        .slice(2)
        .map(file => file.substring(0, file.lastIndexOf('/')))
    : getNestedFolders(contentFolder, 2)

  const newRefs = folders.reduce(
    (acc, path) => ({
      ...acc,
      [path.replace(`${contentFolder}/`, '')]: createCodeSandbox(path),
    }),
    {}
  )

  for (const [methodPath, codeSandboxUrl] of Object.entries(newRefs)) {
    if (codeSandboxUrl !== currentRefs[methodPath]) {
      // eslint-disable-next-line no-console
      console.log('creating a new codesandbox for', methodPath)
      const { request } = await axios.get(codeSandboxUrl)
      currentRefs[methodPath] = codeSandboxUrl
      currentUrls[methodPath] = request.res.responseUrl
    }
  }

  fs.writeFileSync(
    `./src/code-sandbox-refs.json`,
    prettier.format(JSON.stringify(currentRefs, null, 2), {
      filepath: `./src/code-sandbox-refs.json`,
    }),
    'utf8'
  )
  fs.writeFileSync(
    `./src/code-sandbox.json`,
    prettier.format(JSON.stringify(currentUrls, null, 2), {
      filepath: `./src/code-sandbox.json`,
    }),
    'utf8'
  )
})()
