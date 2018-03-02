import { lastIndexOf } from 'lodash'

exports.simple = lastIndexOf([1, 2, 1, 2], 2)
// => 3

// Search from the `fromIndex`
exports.fromIndex = lastIndexOf([1, 2, 1, 2], 2, 2)
// => 1
