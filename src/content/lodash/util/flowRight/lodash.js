// https://lodash.com/docs/#flowRight
import { flowRight } from 'lodash'

function add(a, b) {
  return a + b
}

function square(n) {
  return n * n
}

const addSquare = flowRight([square, add])
module.exports = addSquare(1, 2)
// => 9
