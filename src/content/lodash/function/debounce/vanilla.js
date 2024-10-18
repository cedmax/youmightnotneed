const debounce = (func, delay, { leading } = {}) => {
  let timerId
  let invokedTimes = 0

  return (...args) => {
    ++invokedTimes

    if (!timerId && leading) {
      func(...args)
    }
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      if (leading && invokedTimes === 1) {
        return
      }

      func(...args)
    }, delay)
  }
}

module.exports = (...args) => debounce(...args)
