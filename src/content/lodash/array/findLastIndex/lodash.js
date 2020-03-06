// https://lodash.com/docs/#findLastIndex
import { findLastIndex } from 'lodash'

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
]

exports.found = findLastIndex(users, o => !o.active)
// => 2

exports.notFound = findLastIndex(users, o => !o.user)
// => -1
