// https://lodash.com/docs/#negate
import { negate } from 'lodash'

const isEven = n => n % 2 === 0

module.exports = [1, 2, 3, 4, 5, 6].filter(negate(isEven))
// => [1, 3, 5]
