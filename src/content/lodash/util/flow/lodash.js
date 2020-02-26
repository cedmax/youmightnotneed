// https://lodash.com/docs/#flow
import { flow } from 'lodash'

function add(a, b) {
  return a + b
}

function square(n) {
  return n * n
}

const addSquare = flow([add, square])
module.exports = addSquare(1, 2)
// => 9
