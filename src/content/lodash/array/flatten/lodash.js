import { flatten } from 'lodash'

flatten([1, [2, [3, [4]], 5]])
// => [1, 2, [3, [4]], 5]
