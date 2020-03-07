// https://lodash.com/docs/#forEachRight
import { forEachRight } from 'lodash'

const array = ['a', 'b', 'c']

module.exports = forEachRight(array, (item, index) => {
  console.log(item, index)
})
// => c 2
// => b 1
// => a 0
