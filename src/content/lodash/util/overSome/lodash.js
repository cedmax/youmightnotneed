// https://lodash.com/docs/#overSome
import { overSome } from 'lodash'

const func = overSome([Boolean, isFinite])

exports.string = func('1')
// => true

exports.null = func(null)
// => true

exports.nan = func(NaN)
// => false
