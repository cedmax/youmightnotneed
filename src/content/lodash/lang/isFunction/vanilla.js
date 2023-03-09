const isFunction = val => typeof val === 'function' || val instanceof Function

exports.func = isFunction(function () {})
// => true

exports.arrowFunc = isFunction(() => {})
// => true

exports.class = isFunction(class NotAFunction {})
// => false

exports.reg = isFunction(/abc/)
// => false

exports.eval = isFunction(eval('() => {}'))
// => true

exports.new = isFunction(new Function('x', 'y', 'return x * y;'))
// => true
