const { getProject, getSection, getSectionInput, getMethod } = require('./questions')

module.exports = async base => {
  const project = await getProject(base)
  const section = (await getSection(base, project)) || (await getSectionInput())
  const method = await getMethod()

  return {
    base,
    project,
    section,
    method,
  }
}
