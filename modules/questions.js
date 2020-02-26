const inquirer = require('inquirer')
const fs = require('fs')
const capitalize = require('lodash/capitalize')
const path = require('path')

const listProjects = p =>
  fs
    .readdirSync(p)
    .filter(f => fs.statSync(path.join(p, f)).isDirectory())
    .map(dir => capitalize(dir))

exports.getProject = async base => {
  const { project } = await inquirer.prompt({
    name: 'project',
    type: 'list',
    message: 'What project?',
    choices: listProjects(`${base}`),
  })
  return project.toLowerCase()
}

exports.getSection = async (base, project) => {
  const askAgain = 'I want to add a missing one'
  const { section } = await inquirer.prompt({
    name: 'section',
    type: 'list',
    message: 'What section?',
    choices: [...listProjects(`${base}/${project}`), askAgain],
  })

  return section === askAgain ? '' : section.toLowerCase()
}

exports.getSectionInput = async () => {
  const { section } = await inquirer.prompt({
    name: 'section',
    type: 'input',
    message: 'What section?',
  })

  return section.toLowerCase()
}

exports.getMethod = async () => {
  const { method } = await inquirer.prompt({
    name: 'method',
    type: 'input',
    message: 'What method?',
  })

  return method
}

exports.runTest = async () => {
  const { test } = await inquirer.prompt({
    name: 'test',
    type: 'confirm',
    message: 'Run test?',
  })

  return test
}
