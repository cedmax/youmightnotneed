// https://lodash.com/docs/#minBy
import { minBy } from 'lodash'

const objects = [{ n: 1 }, { n: 2 }]

exports.function = minBy(objects, o => o.n)
// => { 'n': 1 }

exports.shortHand = minBy(objects, 'n')
// => { 'n': 1 }
