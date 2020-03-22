const axios = require('axios')
const cheerio = require('cheerio')

module.exports = async ({ method, project }) => {
  if (project !== 'lodash') return
  try {
    const { data } = await axios.get('https://lodash.com/docs/4.17.15')

    const $ = cheerio.load(data)

    return {
      description: $(`#${method}`).siblings('p').next().html(),
      example: $(`#${method}`)
        .siblings('.highlight')
        .find('div')
        .toArray()
        .map(
          item =>
            `// ${$(item)
              .text()
              .replace(`_.${method}(`, `${method}(`)
              .replace(/\s+/g, ' ')}`
        )
        .join('\n'),
    }
  } catch (e) {
    console.log('Failed to fetch examples for', method)
  }
}
