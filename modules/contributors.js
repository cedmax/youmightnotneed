const path = require('path')
const gh = require('gh-got')
const readmeFilename = require('readme-filename')
const replace = require('replace-in-file')

const customContributorList = ['doydoy44']

const generateHtml = data =>
  data.reduce(
    (html, { html_url, avatar_url, login }) =>
      html +
      `<a href="${html_url}"><img src="${avatar_url}" title="${login}" width="80" height="80"></a>\n`,
    ''
  )

const getContributors = () =>
  gh(`repos/cedmax/youmightnotneed/contributors`, {
    per_page: 300,
  }).then(({ body }) =>
    body.filter(
      ({ login }) => !login.endsWith('-bot') && !login.endsWith('[bot]')
    )
  )

;(async () => {
  const contributors = await getContributors()

  while (customContributorList.length) {
    const { body: user } = await gh(`users/${customContributorList.shift()}`)
    contributors.push(user)
  }

  await readmeFilename('.').then(
    filename =>
      new Promise(() =>
        replace({
          files: path.resolve('.', filename),
          from: /\[\/\/\]: contributor-faces(?:(?:\n.*)+\[\/\/\]: contributor-faces)?/,
          to: `[//]: contributor-faces\n${generateHtml(
            contributors
          )}\n[//]: contributor-faces`,
        })
      )
  )
})()
