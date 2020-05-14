const axios = require('axios')
const cheerio = require('cheerio')

const fetchers = {
  lodash: async method => {
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
  },
  'date-fns': async method => {
    const { data } = await axios.get(
      'https://date-fns.org/cache?url=https%3A%2F%2Fdate-fns.firebaseio.com%2Fdocs%2F-M6fpOu-T9ZlFQtHhlHL.json&v=1.2'
    )

    const page = data.pages.find(page => page.urlId === method)

    return {
      description: page.description,
      example: page.content.examples
        .map(str =>
          str
            .replace('var result =', 'module.exports =')
            .replace(/\/\/=>/g, '// =>')
        )
        .join('\n'),
    }
  },
}

module.exports = async ({ method, project }) => {
  let data = {}
  try {
    data = await fetchers[project](method)
  } catch (e) {
    console.log('Failed to fetch examples for', method)
  }
  return data
}
