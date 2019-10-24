// https://lodash.com/docs/#maxBy
import { maxBy } from 'lodash'

const objects = [{ n: 1 }, { n: 2 }]

exports.function = maxBy(objects, o => o.n)
// => { 'n': 2 }

exports.shortHand = maxBy(objects, 'n')
// => { 'n': 2 }
