// https://lodash.com/docs/#minBy
import { minBy } from 'lodash'

const objects = [{ n: 1 }, { n: 2 }]

module.exports = minBy(objects, o => o.n)
// => { 'n': 1 }
