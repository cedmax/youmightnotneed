// https://lodash.com/docs/#forEach
import { forEach } from 'lodash'

const array = ['a', 'b', 'c']

forEach(array, (item, index) => {
  console.log(item, index)
})
// => a 0
// => b 1
// => c 2

const obj = { a: 'red', b: 'green' }
forEach(obj, (item, key) => {
  console.log(item, key)
})
// => red a
// => green b