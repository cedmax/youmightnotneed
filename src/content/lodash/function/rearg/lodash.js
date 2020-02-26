// https://lodash.com/docs/#rearg
import { rearg } from 'lodash'

const rearged = rearg((a, b, c) => [a, b, c], [2, 0, 1])

module.exports = rearged('b', 'c', 'a')
// => ['a', 'b', 'c']
