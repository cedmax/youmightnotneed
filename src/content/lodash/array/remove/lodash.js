// https://lodash.com/docs/#remove
import { remove } from 'lodash'

const array = [1, 2, 3, 4]
const evens = remove(array, n => {
  return n % 2 === 0
})

exports.array = array
// => [1, 3]

exports.evens = evens
// => [2, 4]
