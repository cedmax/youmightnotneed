// https://lodash.com/docs/#forEach
import { forEach } from 'lodash'

const array = ['a', 'b', 'c']

forEach(array, (item, index) => {
  console.log(item, index)
})
// => a 0
// => b 1
// => c 2
