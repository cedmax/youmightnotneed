const bind = (fn, ctx, ...boundArgs) => {
  return (...args) => {
    const jointArgs = [...boundArgs, ...args]
    return fn.call(ctx, ...jointArgs)
  }
}

function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation
}

var object = { user: 'fred' }

var bound = bind(greet, object, 'hi')

module.exports = bound('!')
// => 'hi fred!'
