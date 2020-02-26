const fs = require('fs')
const templates = require('./templates')

module.exports = ({ base, project, section, method, example }) => {
  if (!fs.existsSync(`${base}/${project}/${section}`)) {
    fs.mkdirSync(`${base}/${project}/${section}`)
  }

  fs.mkdirSync(`${base}/${project}/${section}/${method}`)

  const template = templates[project]
  fs.writeFileSync(
    `${base}/${project}/${section}/${method}/${project}.js`,
    (template && template(method, example)) || '',
    'utf-8'
  )
  fs.writeFileSync(`${base}/${project}/${section}/${method}/vanilla.js`, example || '', 'utf-8')
  fs.writeFileSync(`${base}/${project}/${section}/${method}/notes.md`, '', 'utf-8')
  fs.writeFileSync(
    `${base}/${project}/${section}/${method}/spec.js`,
    templates.spec(method),
    'utf-8'
  )
}
