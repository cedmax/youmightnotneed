const fs = require('fs')
const templates = require('./templates')

module.exports = ({ base, project, section, method, example, description }) => {
  if (!fs.existsSync(`${base}/${project}/${section}`)) {
    fs.mkdirSync(`${base}/${project}/${section}`)
  }
  if (!fs.existsSync(`${base}/${project}/${section}/${method}`)) {
    fs.mkdirSync(`${base}/${project}/${section}/${method}`)
  }

  if (!fs.existsSync(`${base}/${project}/${section}/${method}/spec.js`)) {
    const template = templates[project]
    fs.writeFileSync(
      `${base}/${project}/${section}/${method}/${project}.js`,
      (template && template(method, example)) || '',
      'utf-8'
    )
    fs.writeFileSync(
      `${base}/${project}/${section}/${method}/vanilla.js`,
      `const ${method} = () => {}

${example || ''}`,
      'utf-8'
    )
    fs.writeFileSync(
      `${base}/${project}/${section}/${method}/notes.md`,
      description || '',
      'utf-8'
    )
    fs.writeFileSync(
      `${base}/${project}/${section}/${method}/spec.js`,
      templates.spec(project, method),
      'utf-8'
    )
  }
}
