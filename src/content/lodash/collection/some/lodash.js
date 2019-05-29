import { some } from 'lodash'

const isEven = n => n % 2 === 0

module.exports = some([3, 4, 5], isEven)
// => true
