const contributors = require('contributor-faces')

contributors.update('.', {
  exclude: str => str.endsWith('-bot') || str.endsWith('[bot]'),
})
