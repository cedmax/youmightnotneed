import { find } from 'lodash'

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]

module.exports = find(users, o => o.age < 40)
// => { user: "barney", age: 36, active: true }
