// https://lodash.com/docs/#maxBy
import { maxBy } from 'lodash'

const objects = [{ n: 1 }, { n: 2 }]

module.exports = maxBy(objects, o => o.n)
// => { 'n': 2 }
