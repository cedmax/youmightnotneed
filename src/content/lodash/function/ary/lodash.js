// https://lodash.com/docs/#ary
import { ary } from 'lodash'

module.exports = ['6', '8', '10'].map(ary(Number.parseInt, 1))
// => [6, 8, 10]
