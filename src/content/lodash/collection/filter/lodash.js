import { filter } from 'lodash'

function isBigEnough (value) {
  return value >= 10
}

module.exports = filter([12, 5, 8, 130, 44], isBigEnough)
// => [12, 130, 44]
