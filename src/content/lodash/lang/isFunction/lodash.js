// https://lodash.com/docs/#isFunction
import { isFunction } from 'lodash'

exports.func = isFunction(function () {})
// => true

exports.arrowFunc = isFunction(() => {})
// => true

exports.class = isFunction(class NotAFunction {})
// => true

exports.reg = isFunction(/abc/)
// => false
