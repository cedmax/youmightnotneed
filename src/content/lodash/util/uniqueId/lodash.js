// https://lodash.com/docs/#uniqueId
import { uniqueId } from 'lodash'

exports.composed = uniqueId('contact_')
// => 'contact_1'

exports.simple = uniqueId()
// => '2'
