const fs = require('fs')
const jest = require('jest')
const getExample = require('./get-example')
const createFiles = require('./create-files')
const prompt = require('./prompt')

const base = './src/content'

const getList = () => {
  try {
    // eslint-disable-next-line import/no-unresolved
    return require('../list.json')
  } catch (e) {
    return []
  }
}

;(async () => {
  const data = await prompt(base, getList())

  for (let i = 0; i < data.methods.length; i++) {
    data.method = data.methods[i]
    // eslint-disable-next-line no-await-in-loop
    const { example, description } = await getExample(data)
    data.example = example
    data.description = description
    createFiles(data)
  }

  if (data.methods.length > 1) {
    fs.writeFileSync('./list.json', '[]', 'utf8')
  }

  if (data.test) {
    const args = data.methods.map(method => `${data.section}/${method}`)
    jest.run([...args, '--watch', '--coverage=false'])
  }
})()
