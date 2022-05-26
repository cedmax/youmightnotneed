const bindKey =
  (obj, method, ...args) =>
  (...bound) =>
    obj[method](...args, ...bound)

const object = {
  'user': 'fred',
  'greet': function (greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation
  },
}

let bound = bindKey(object, 'greet', 'hi')
exports.first = bound('!')
// => 'hi fred!'

object.greet = function (greeting, punctuation) {
  return greeting + 'ya ' + this.user + punctuation
}

exports.second = bound('!')
// => 'hiya fred!'
