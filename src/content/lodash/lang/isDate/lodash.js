// https://lodash.com/docs/#isDate
import { isDate } from 'lodash'

exports.true = isDate(new Date())
// => true

exports.false = isDate('Mon April 23 2012')
// => false
