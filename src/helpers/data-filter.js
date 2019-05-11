export default (data, value) =>
  Object.keys(data).reduce((cache, section) => {
    const methods = Object.keys(data[section]).filter(
      method => method.toLowerCase().indexOf(value.toLowerCase()) === 0
    )

    cache[section] = methods.reduce((innerCache, method) => {
      innerCache[method] = data[section][method]
      return innerCache
    }, {})

    if (!Object.keys(cache[section]).length) {
      delete cache[section]
    }

    return cache
  }, {})
