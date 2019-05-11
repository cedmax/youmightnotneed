import { every } from 'lodash'

function isLargerThanTen(element) {
  return element >= 10
}

module.exports = every([10, 20, 30], isLargerThanTen)
// => true
