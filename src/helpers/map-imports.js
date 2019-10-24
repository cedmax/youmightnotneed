const parse = object => {
  const result = Object.keys(object).reduce((cache, file) => {
    const parts = file.split('/')
    const area = parts[1]
    const method = parts[2]
    const version = parts[3]
      .replace('.js', '')
      .replace('vanilla', 'plain js')
      .replace('.md', '')

    cache[area] = cache[area] || {}
    cache[area][method] = cache[area][method] || {}

    cache[area][method][version] = (object[file].default || object[file])
      .replace(/<a href=/gi, '<a target="_blank" href=')
      .replace(/(module.)?exports(\.(.+))? = /g, '')

    return cache
  }, {})
  return result
}

const map = r =>
  parse(
    r.keys().reduce((cache, key) => {
      cache[key] = r(key)
      return cache
    }, {})
  )

export default map
