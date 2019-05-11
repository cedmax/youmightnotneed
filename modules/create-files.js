const fs = require('fs')
const templates = require('./templates')

module.exports = ({ base, project, section, method }) => {
  if (!fs.existsSync(`${base}/${project}/${section}`)) {
    fs.mkdirSync(`${base}/${project}/${section}`)
  }

  fs.mkdirSync(`${base}/${project}/${section}/${method}`)

  const template = templates[project]
  fs.writeFileSync(
    `${base}/${project}/${section}/${method}/${project}.js`,
    (template && template(method)) || '',
    'utf-8'
  )
  fs.writeFileSync(`${base}/${project}/${section}/${method}/vanilla.js`, '', 'utf-8')
  fs.writeFileSync(`${base}/${project}/${section}/${method}/notes.md`, '', 'utf-8')
  fs.writeFileSync(`${base}/${project}/${section}/${method}/spec.js`, templates.spec(method), 'utf-8')
}
