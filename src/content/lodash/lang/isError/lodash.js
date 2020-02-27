// https://lodash.com/docs/#isError
import { isError } from 'lodash'

exports.error = isError(new Error())
// => true

exports.notError = isError(Error)
// => false
