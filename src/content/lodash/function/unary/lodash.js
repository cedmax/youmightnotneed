// https://lodash.com/docs/#unary
import { unary } from 'lodash'

module.exports = ['6', '8', '10'].map(unary(Number.parseInt))
// => [6, 8, 10]
