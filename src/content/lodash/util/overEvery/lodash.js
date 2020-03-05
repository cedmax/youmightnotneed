// https://lodash.com/docs/#overEvery
import { overEvery } from 'lodash'

const func = overEvery([Boolean, isFinite])

exports.string = func('1')
// => true

exports.null = func(null)
// => false

exports.nan = func(NaN)
// => false
