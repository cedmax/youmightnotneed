const jest = require('jest')
const createFiles = require('./create-files')
const prompt = require('./prompt')

const base = './src/content'

;(async () => {
  const data = await prompt(base)
  createFiles(data)

  if (data.test) {
    jest.run([`${data.section}/${data.method}`, '--watch'])
  }
})()
