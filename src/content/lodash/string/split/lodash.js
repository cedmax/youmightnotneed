import { split } from 'lodash'

const all = split('a-b-c', '-')
const justTwo = split('a-b-c', '-', 2)

module.exports = {
  all,
  justTwo,
}
