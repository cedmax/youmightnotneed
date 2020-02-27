// https://lodash.com/docs/#flip
import { flip } from 'lodash'

const flipped = flip((...args) => args)

module.exports = flipped('a', 'b', 'c', 'd')
// => ['d', 'c', 'b', 'a']
