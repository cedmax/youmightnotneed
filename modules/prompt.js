const {
  getProject,
  getSection,
  getSectionInput,
  getMethod,
  runTest,
} = require('./questions')

module.exports = async (base, list) => {
  const project = await getProject(base)
  const section = (await getSection(base, project)) || (await getSectionInput())
  let methods = []
  if (!list.length) {
    const method = await getMethod()
    methods.push(method)
  } else {
    methods = [...list]
  }
  const test = await runTest()

  return {
    base,
    project,
    section,
    methods,
    test,
  }
}
