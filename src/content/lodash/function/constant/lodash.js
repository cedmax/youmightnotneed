// https://lodash.com/docs/#constant
import { constant } from 'lodash'

const return42 = constant(42)
module.exports = return42()
// => 42
