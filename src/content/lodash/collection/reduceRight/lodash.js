// https://lodash.com/docs/#reduceRight
import { reduceRight } from 'lodash'

module.exports = reduceRight(
  [
    [0, 1],
    [2, 3],
    [4, 5],
  ],
  (flattened, other) => flattened.concat(other),
  []
)
// => [4, 5, 2, 3, 0, 1]
