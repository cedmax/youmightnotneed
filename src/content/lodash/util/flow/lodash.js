// https://lodash.com/docs/#flow
import { flow } from 'lodash'

const add = (a, b) => a + b

const square = n => n * n

const addSquare = flow([add, square])
module.exports = addSquare(1, 2)
// => 9
