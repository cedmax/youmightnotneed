const createFiles = require('./create-files')
const prompt = require('./prompt')

const base = './src/content'

;(async () => {
  const data = await prompt(base)

  createFiles(data)
})()
