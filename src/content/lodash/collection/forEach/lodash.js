import { forEach } from 'lodash'

function iteratee(item, index) {
  console.log(item, index)
}

const array = ['a', 'b', 'c']

forEach(array, iteratee)
// => a 0
// => b 1
// => c 2
