const debounce = (func, delay, { leading } = {}) => {
  let timerId

  return (...args) => {
    if (!timerId && leading) {
      func(...args)
    }
    clearTimeout(timerId)

    timerId = setTimeout(() => func(...args), delay)
  }
}

module.exports = (...args) => debounce(...args)
