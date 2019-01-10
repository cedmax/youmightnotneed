const inquirer = require('inquirer')
const fs = require('fs')
const capitalize = require('lodash/capitalize')
const { join } = require('path')

const listProjects = p =>
  fs
    .readdirSync(p)
    .filter(f => fs.statSync(join(p, f)).isDirectory())
    .map(dir => capitalize(dir))

module.exports = async base => {
  const { project } = await inquirer.prompt({
    name: 'project',
    type: 'list',
    message: 'What project?',
    choices: listProjects(`${base}`),
  })
  let { section } = await inquirer.prompt({
    name: 'section',
    type: 'list',
    message: 'What section?',
    choices: [...listProjects(`${base}/${project}`), 'I want to add a missing one'],
  })

  if (section === 'I want to add a missing one') {
    const { section: inputSection } = await inquirer.prompt({
      name: 'section',
      type: 'input',
      message: 'What section?',
    })
    section = inputSection
  }

  const { method } = await inquirer.prompt({
    name: 'method',
    type: 'input',
    message: 'What method?',
  })

  return {
    base,
    project: project.toLowerCase(),
    section: section.toLowerCase(),
    method: method.toLowerCase(),
  }
}
