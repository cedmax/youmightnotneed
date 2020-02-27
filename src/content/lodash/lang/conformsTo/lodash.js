// https://lodash.com/docs/#conformsTo
import { conformsTo } from 'lodash'

const object = { a: 1, b: 2 }

exports.scenario1 = conformsTo(object, {
  b: n => n > 1,
})
// => true

exports.scenario2 = conformsTo(object, {
  b: n => n > 2,
})
// => false
