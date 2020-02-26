// https://lodash.com/docs/#upperFirst
import { upperFirst } from 'lodash'

exports.lowerCase = upperFirst('fred')
// => 'Fred'

exports.upperCase = upperFirst('FRED')
// => 'FRED'
